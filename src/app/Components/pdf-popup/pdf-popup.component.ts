import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css']
})
export class PdfPopupComponent {
  isPopupOpen: boolean = false;
  pdfData: string = ''; // Base64-encoded PDF data

  openPopup() {
    this.isPopupOpen = true;
    this.loadPdfData();
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  loadPdfData() {
    // Fetch the PDF data from an API or any other source
    // Replace the below example with the actual way you fetch the PDF data
    const pdfUrl = '/Users/yatenderkumarhudda/Desktop/Learning/Angular/basicAngularProject/Licence Payment Slip.pdf';
    debugger;
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          this.pdfData = base64data;
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error fetching PDF data:', error);
      });
  }
}
