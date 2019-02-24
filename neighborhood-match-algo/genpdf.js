const PDFDocument = require('pdfkit');
const doc = new PDFDocument;

doc.pipe(fs.createWriteStream('/Users/xdeng/Desktop/HackUTD/report.pdf')); // write to PDF
doc.pipe(res);                                       // HTTP response

doc.end();


