<h1>Images Scraper CLI</h1>

<h2>Overview</h2>

<p>Images Scraper CLI is a command-line tool that allows you to scrape and download images from the internet based on a specified search query using the <a href="https://www.npmjs.com/package/@ibrahim-rahhal/images-scraper">images-scraper</a> package. It provides a simple and customizable way to download a specified number of images and save them to a designated output directory.</p>

<h2>Installation</h2>

<p>Before using the Images Scraper CLI, make sure you have Node.js installed on your machine.</p>

<pre><code>npm install -g images-scraper-cli
</code></pre>

<h2>Usage</h2>

<p>Run the CLI using the following command:</p>

<pre><code>images-scraper-cli &lt;search query&gt; &lt;number of images&gt; &lt;output directory&gt;
</code></pre>

<ul>
  <li><code>&lt;search query&gt;</code>: The query for images you want to search for.</li>
  <li><code>&lt;number of images&gt;</code> (optional): The number of images to download (default is 10).</li>
  <li><code>&lt;output directory&gt;</code> (optional): The directory where the images will be saved (default is './scrapped-images').</li>
</ul>

<h3>Example</h3>

<pre><code>images-scraper-cli "cats" 10 "./cats"
</code></pre>

<h2>Notes</h2>

<ul>
  <li>If the specified output directory does not exist, it will be created automatically.</li>
  <li>Supported image file extensions are "png", "jpg", "jpeg", "gif", and "webp".</li>
</ul>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Acknowledgments</h2>

<p><a href="https://www.npmjs.com/package/@ibrahim-rahhal/images-scraper">Ibrahim Rahhal</a> for the <a href="https://www.npmjs.com/package/@ibrahim-rahhal/images-scraper">images-scraper</a> package.</p>

<h2>Contributions</h2>

<p>Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.</p>

<h2>Disclaimer</h2>

<p>This project is for educational and personal use only. Use it responsibly and respect the terms of service of the websites you are scraping images from.</p>
