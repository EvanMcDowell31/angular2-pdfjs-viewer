import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent {
  @ViewChild('externalPdfViewer') public externalPdfViewer;
  @ViewChild('embeddedPdfViewer') public embeddedPdfViewer;
  @ViewChild('inlinePdfViewer') public inlinePdfViewer;

  public isPdfLoaded = false;

  public openPdf() {
    console.log('opening pdf in new tab!');
    this.externalPdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
    this.externalPdfViewer.refresh();
  }

  public changePdf() {
    console.log('Changing pdf viewer url!');
    this.embeddedPdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
    this.embeddedPdfViewer.refresh();
  }

  public loadAndDisplayPdf() {
    this.inlinePdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
    this.inlinePdfViewer.refresh();
    this.isPdfLoaded = !this.isPdfLoaded;
  }
}
