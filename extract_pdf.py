import pypdf

def extract_text(pdf_path, output_txt_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        with open(output_txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Successfully extracted text to {output_txt_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    pdf_path = r"c:\Users\14545\Desktop\岭南大学AIBA\Machine Learning for Business\Individual_ProjecT\524_Individual_Project.pdf"
    output_txt_path = "project_requirements.txt"
    extract_text(pdf_path, output_txt_path)
