import jsPDF from "jspdf";

export function downloadReport(
  atsScore,
  matchScore,
  matchedSkills,
  missingSkills,
  suggestions
) {

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("AI Resume Analysis Report", 20, y);

  y += 15;

  doc.setFontSize(14);

  doc.text(`ATS Score : ${atsScore}%`,20,y);

  y+=10;

  doc.text(`Job Match : ${matchScore}%`,20,y);

  y+=15;

  doc.text("Matched Skills",20,y);

  y+=10;

  matchedSkills.forEach(skill=>{

      doc.text("• "+skill,25,y);

      y+=8;

  });

  y+=5;

  doc.text("Missing Skills",20,y);

  y+=10;

  missingSkills.forEach(skill=>{

      doc.text("• "+skill,25,y);

      y+=8;

  });

  y+=5;

  doc.text("Suggestions",20,y);

  y+=10;

  suggestions.forEach(item=>{

      doc.text("• "+item,25,y);

      y+=8;

  });

  y+=15;

  doc.text(
      "Generated using AI Resume Analyzer",
      20,
      y
  );

  doc.save("Resume_Analysis_Report.pdf");

}