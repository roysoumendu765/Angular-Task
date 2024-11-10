// pdf.service.ts
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  constructor() { }

  async generatePdf(elementId: string, filename: string): Promise<void> {
    const element = document.getElementById(elementId);

    if (element) {
      const canvas = await html2canvas(element);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -pageHeight, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    }
  }
}