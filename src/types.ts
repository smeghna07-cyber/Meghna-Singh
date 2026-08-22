export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  type: 'journal' | 'case_study' | 'cross_sectional';
  year?: string;
  journalOrContext?: string;
  authors: string;
  tags: string[];
  abstractSnippet?: string;
}

export interface ConferencePresentation {
  id: string;
  title: string;
  conference: string;
  location: string;
  year: string;
  type: string;
  note?: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
  description?: string;
}

export interface FdpCertification {
  id: string;
  title: string;
  issuer?: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  type: 'academic' | 'clinical_internship';
  summary: string;
  responsibilities: string[];
  departments?: string[];
}
