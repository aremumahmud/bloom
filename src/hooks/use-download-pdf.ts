import { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export function useDownloadPDF(filename: string) {
  const [downloading, setDownloading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const downloadPDF = useCallback(async () => {
    if (!containerRef.current || downloading) return;
    setDownloading(true);

    try {
      const pageElements = containerRef.current.querySelectorAll("[data-pdf-page]") as NodeListOf<HTMLElement>;
      const elements = pageElements.length > 0
        ? Array.from(pageElements)
        : Array.from(containerRef.current.children) as HTMLElement[];

      if (elements.length === 0) return;

      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "letter" });
      const LETTER_W = 612;
      const LETTER_H = 792;

      for (let i = 0; i < elements.length; i++) {
        if (i > 0) pdf.addPage("letter", "portrait");

        const canvas = await html2canvas(elements[i], {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/png");
        const aspectRatio = canvas.width / canvas.height;
        let imgW = LETTER_W;
        let imgH = imgW / aspectRatio;

        if (imgH > LETTER_H) {
          imgH = LETTER_H;
          imgW = imgH * aspectRatio;
        }

        const xOffset = (LETTER_W - imgW) / 2;
        const yOffset = (LETTER_H - imgH) / 2;

        pdf.addImage(imgData, "PNG", xOffset, yOffset, imgW, imgH);
      }

      const safeName = filename.replace(/[^a-zA-Z0-9-_ ]/g, "").replace(/\s+/g, "-");
      pdf.save(`${safeName}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
  }, [downloading, filename]);

  return { containerRef, downloading, downloadPDF };
}
