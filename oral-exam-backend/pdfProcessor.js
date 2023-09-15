const fs = require('fs');
const pdf = require('pdf-parse');

// Define the path to your sample PDF file.
const pdfFilePath = './sample.pdf';

// Read the PDF file.
const dataBuffer = fs.readFileSync(pdfFilePath);

// Convert the data buffer to a text string.
pdf(dataBuffer).then(function (data) {
  // Extracted text is available in data.text.
  console.log(data.text);
}).catch(function (error) {
  console.error(error);
});
