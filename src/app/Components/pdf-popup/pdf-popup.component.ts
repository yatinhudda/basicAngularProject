
import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css']
})
export class PdfPopupComponent {
  isPopupOpen: boolean = false;
  pdfUrl: string = '/Users/yatenderkumarhudda/Desktop/Important Documents/Driving Licence Slot Booking Info.pdf'; // Replace with the actual URL or path to your PDF
  currentPage: number = 1;
  totalPages: number = 0;

  openPopup() {
    this.isPopupOpen = true;
    this.loadPdf();
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  loadPdf() {
    // You can use a PDF library (e.g., pdf.js) or an external API to load and render the PDF.
    // Here, we assume that the PDF is already loaded and the total number of pages is known.
    // You would need to implement this logic based on your specific requirements.
    this.totalPages = 10; // Replace with the actual total number of pages in the PDF
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
