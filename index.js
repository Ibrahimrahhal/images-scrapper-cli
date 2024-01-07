var Scraper = require('@ibrahim-rahhal/images-scraper');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const searchQuery = process.argv[2];
const numberOfImagesOption = process.argv[3];
const numberOfImages = numberOfImagesOption ? parseInt(numberOfImagesOption) : 10;
const outDirectory = process.argv[4] || './scrapped-images';
if(!fs.existsSync(outDirectory)) {
    fs.mkdirSync(outDirectory);
}
if(!searchQuery) {
    help();
}


function help(){
    console.log('Usage: images-scrapper-cli <search query> <number of images>(optional) <output directory>(optional)');
    console.log('Example: images-scrapper-cli "cats" 10 "./cats"');
    process.exit(1);
}

async function downloadImage(url, directoryPath) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const fileExtension = path.extname(url).toLowerCase().split('?')[0];
    if(!["png", "jpg", "jpeg", "gif", "webp"].find( ext => fileExtension.includes(ext))) {
        throw new Error('Invalid file extension');
    }
    const timestamp = new Date().getTime();
    const filename = `${timestamp}${fileExtension}`;

    const filePath = path.join(directoryPath, filename);

    fs.writeFileSync(filePath, Buffer.from(response.data, 'binary'));
    console.log(`Image downloaded successfully: ${filePath}`);
  } catch (error) {
    throw new Error('Error downloading image:', error.message);
  }
}
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
});

(async () => {
  const results = await google.scrape(searchQuery, numberOfImages);
  const Imageresults = await Promise.allSettled(
    results.map((result) => {
      return new Promise(async (resolve, reject) => {
        const imageUrl = result.url;
        try {
            await downloadImage(imageUrl, outDirectory);
            resolve();
        } catch(err) {
            reject(err);
        }
      });
    })
  )
  console.log(`Downloaded ${Imageresults.filter(x => x.status === 'fulfilled').length} images, ${Imageresults.filter(x => x.status === 'rejected').length} failed`)
})();
