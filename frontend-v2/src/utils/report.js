import { jsPDF } from "jspdf";

export function downloadReport(
  atsScore,
  matchScore,
  matchedSkills,
  missingSkills,
  suggestions
) {
  const doc = new jsPDF();

  let y = 20;

  // ---------------- TITLE ----------------

  doc.setFontSize(22);
  doc.setTextColor(30, 64, 175);
  doc.text("AI Resume Analysis Report", 20, y);

  y += 18;

  // ---------------- SCORES ----------------

  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);

  doc.text(`ATS Score : ${atsScore}%`, 20, y);

  y += 10;

  doc.text(`Job Match : ${matchScore}%`, 20, y);

  y += 18;

  // ---------------- MATCHED SKILLS ----------------

  doc.setFontSize(17);
  doc.setTextColor(34, 139, 34);

  doc.text("Matched Skills", 20, y);

  y += 10;

  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);

  if (matchedSkills.length === 0) {

    doc.text("No matched skills found.", 25, y);

    y += 10;

  } else {

    matchedSkills.forEach(skill => {

      doc.text("• " + skill, 25, y);

      y += 8;

    });

  }

  y += 8;

  // ---------------- MISSING SKILLS ----------------

  doc.setFontSize(17);
  doc.setTextColor(220, 20, 60);

  doc.text("Missing Skills", 20, y);

  y += 10;

  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);

  if (missingSkills.length === 0) {

    doc.text("No missing skills.", 25, y);

    y += 10;

  } else {

    missingSkills.forEach(skill => {

      doc.text("• " + skill, 25, y);

      y += 8;

    });

  }

  y += 8;

  // ---------------- AI SUGGESTIONS ----------------

  doc.setFontSize(17);
  doc.setTextColor(30, 64, 175);

  doc.text("AI Suggestions", 20, y);

  y += 10;

  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);

  if (suggestions.length === 0) {

    doc.text("No suggestions available.", 25, y);

  } else {

    suggestions.forEach(item => {

      const lines = doc.splitTextToSize(
        "• " + item,
        160
      );

      doc.text(lines, 25, y);

      y += lines.length * 8;

      // Create a new page if needed
      if (y > 270) {

        doc.addPage();

        y = 20;

      }

    });

  }

  y += 15;

  // ---------------- FOOTER ----------------

  doc.setDrawColor(200);

  doc.line(20, y, 190, y);

  y += 10;

  doc.setFontSize(11);

  doc.setTextColor(120);

  doc.text(
    "Generated using AI Resume Analyzer",
    20,
    y
  );

  doc.text(
    new Date().toLocaleString(),
    135,
    y
  );

  doc.save("Resume_Report.pdf");
}