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
};

export const t = (key) => {
  return translations[key] || key;
}