import React from 'react';

export type SectionId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'terminal'
  | 'contact';

export interface Education {
  institution: string;
  degree: string;
  field: string;
  cgpa: string;
  period: string;
  location: string;
  coursework: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship';
  highlights: string[];
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Machine Learning' | 'Computer Vision & Web';
  subtitle: string;
  techStack: string[];
  description: string[];
  demoType: 'social' | 'sales-ml' | 'face-rec';
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName?: string;
  tag: 'language' | 'frontend' | 'backend' | 'cloud' | 'database' | 'tool';
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  dateBadge?: string;
  description: string;
  badgeType: 'google' | 'aws' | 'mongodb';
  skillsCovered: string[];
  verified: boolean;
}

export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
}

export interface TerminalCommand {
  cmd: string;
  output: string | React.ReactNode;
}

