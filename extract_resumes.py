import pypdf
import docx
import os

def extract_pdf_text(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading PDF: {e}"

def extract_docx_text(docx_path):
    try:
        doc = docx.Document(docx_path)
        text = ""
        for para in doc.paragraphs:
            text += para.text + "\n"
        return text
    except Exception as e:
        return f"Error reading DOCX: {e}"

if __name__ == "__main__":
    pdf_path = r"c:\Users\14545\Desktop\岭南大学AIBA\Machine Learning for Business\Individual_ProjecT\TingkunXUE_CV_3.29.pdf"
    docx_path = r"c:\Users\14545\Desktop\岭南大学AIBA\Machine Learning for Business\Individual_ProjecT\薛廷焜简历2026.3.2.docx"
    
    pdf_text = extract_pdf_text(pdf_path)
    docx_text = extract_docx_text(docx_path)
    
    with open("resume_content.txt", "w", encoding="utf-8") as f:
        f.write("=== PDF RESUME ===\n")
        f.write(pdf_text)
        f.write("\n\n=== DOCX RESUME ===\n")
        f.write(docx_text)
    
    print("Successfully extracted content to resume_content.txt")
