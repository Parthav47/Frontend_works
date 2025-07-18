const puppeteer = require('puppeteer');
const path = require('path');

async function convertHtmlToPdf() {
  try {
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport for better rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });

    // Load the HTML file
    const htmlPath = path.join(__dirname, 'Week1.html');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for images and icons to load
    await page.waitForTimeout(2000);

    // Generate PDF with proper settings
    await page.pdf({
      path: 'portfolio.pdf',
      format: 'Legal',
      printBackground: true,
      landscape: true,
      margin: {
        top: '15mm',
        right: '15mm',
        bottom: '15mm',
        left: '15mm'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: true
    });

    console.log('PDF generated successfully as portfolio.pdf');
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

convertHtmlToPdf(); 