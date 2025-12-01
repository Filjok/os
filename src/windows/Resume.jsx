import { Download } from "lucide-react";
import WindowControls from "../components/windowsControls/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";

import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"resume"} />

        <h2>Resume</h2>
        <a href="/files/FILJO-KURIAN-2025.pdf" download title="download resume">
          <Download size={14} className="icon" />
        </a>
      </div>

      <div className="max-heightWrapper">
        <Document file="/files/FILJO-KURIAN-2025.pdf    ">
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
          <Page pageNumber={2} renderTextLayer renderAnnotationLayer />{" "}
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
