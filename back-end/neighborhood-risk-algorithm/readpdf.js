var PDF_URL = '/Users/xdeng/Desktop/HackUTD/jpg2pdf.pdf';

PDFJS.getDocument(PDF_URL).then(function (PDFDocumentInstance) {

    var pdfDocument = pdf;
    // Create an array that will contain our promises 
    var pagesPromises = [];

    for (var i = 0; i < pdf.pdfInfo.numPages; i++) {
        // Required to prevent that i is always the total of pages
        (function (pageNumber) {
            // Store the promise of getPageText that returns the text of a page
            pagesPromises.push(getPageText(pageNumber, pdfDocument));
        })(i + 1);
    }

    // Execute all the promises
    Promise.all(pagesPromises).then(function (pagesText) {

        // Display text of all the pages in the console
        // e.g ["Text content page 1", "Text content page 2", "Text content page 3" ... ]
        console.log(pagesText);
    });

}, function (reason) {
    // PDF loading error
    console.error(reason);
});