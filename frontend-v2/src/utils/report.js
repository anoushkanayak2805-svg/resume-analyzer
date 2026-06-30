import { jsPDF } from "jspdf";

export function downloadReport(
  atsScore,
  matchScore,
  matchedSkills,
  missingSkills,
  suggestions
) {
  try {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("AI Resume Analysis Report", 20, y);

    y += 15;

    doc.setFontSize(14);

    doc.text(`ATS Score: ${atsScore}%`, 20, y);
    y += 10;

    doc.text(`Job Match: ${matchScore}%`, 20, y);
    y += 15;

    // Matched Skills
    doc.setFontSize(16);
    doc.text("Matched Skills", 20, y);
    y += 10;

    doc.setFontSize(12);

    if (matchedSkills.length === 0) {
      doc.text("- None", 25, y);
      y += 8;
    } else {
      matchedSkills.forEach((skill) => {
        doc.text(`- ${skill}`, 25, y);
        y += 8;
      });
    }

    y += 5;

    // Missing Skills
    doc.setFontSize(16);
    doc.text("Missing Skills", 20, y);
    y += 10;

    doc.setFontSize(12);

    if (missingSkills.length === 0) {
      doc.text("- None", 25, y);
      y += 8;
    } else {
      missingSkills.forEach((skill) => {
        doc.text(`- ${skill}`, 25, y);
        y += 8;
      });
    }

    y += 5;

    // Suggestions
    doc.setFontSize(16);
    doc.text("Suggestions", 20, y);
    y += 10;

    doc.setFontSize(12);

    if (suggestions.length === 0) {
      doc.text("- No suggestions", 25, y);
      y += 8;
    } else {
      suggestions.forEach((item) => {
        doc.text(`- ${item}`, 25, y);
        y += 8;
      });
    }

    y += 15;

    doc.setFontSize(10);
    doc.text("Generated using AI Resume Analyzer", 20, y);

    doc.save("Resume_Analysis_Report.pdf");

    console.log("PDF Download Successful");

  } catch (err) {
    console.error("PDF Error:", err);
    alert("Failed to generate PDF. Check the browser console.");
  }
}