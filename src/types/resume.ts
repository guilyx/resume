// Erwin Lejeune - 2026-02-15

/** Contact details for the resume header. */
export interface ContactInfo {
  email: string;
  portfolio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
}

/** A single bullet point in a work experience entry. */
export interface ExperienceBullet {
  text: string;
}

/** A single work experience entry. */
export interface Experience {
  company: string;
  companyUrl?: string;
  location?: string;
  role: string;
  period: string;
  bullets: ExperienceBullet[];
  promotions?: string;
}

/** An academic degree or certificate. */
export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
}

/** A published paper, article, or conference contribution. */
export interface Publication {
  title: string;
  venue: string;
  date: string;
  url?: string;
}

/** A group of related skills (e.g. "Software Engineering"). */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** Root data structure for the entire resume. */
export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  publications: Publication[];
  skills: SkillGroup[];
}
