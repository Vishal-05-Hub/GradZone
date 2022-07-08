import React from "react";
import FooterComponent from "../../logincomponent/FooterComponent";
import AllPagesPDFViewer  from "./SinglePage";
import samplePDF from "./Syllabus.pdf"
import "./SinglePageStyles.css";

export default function Syllabus() {
  return (
    <div className="Syllabus">
        <div>
        </div>
      <AllPagesPDFViewer  pdf={samplePDF} />

      <FooterComponent />
    </div>
  );
}