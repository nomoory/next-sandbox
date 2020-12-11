const translations = {
  "edmicbio": "EDmicBio",
  "organ-on-a-chip": "Organ-on-a-chip",
  "medical-device": "Medical Device",
  "team": "Team",
  "history": "History",
  "news": "News",
  "announcement": "Announcement",
  "careers": "Careers",
  "vision": "Vision",

  "technology": "Technology",
  "3d-bioprinting": "3D Bioprinting",
  "bioink": "Bioink",
  "collaborations": "Collaborations",
  "microfluidics": "Microfluidics",
  "publications-and-patents": "Publications & Patents",
};

export const t = (key) => {
  return translations[key] || key;
}