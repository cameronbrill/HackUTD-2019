import PyPDF2
pdf_file = open('testtwo.pdf', 'rb')
read_pdf = PyPDF2.PdfFileReader(pdf_file)
number_of_pages = read_pdf.getNumPages()
page = read_pdf.getPage(0)
page_content = page.extractText()
results = open('test.json', 'w')
results.write(page_content)
results.close()