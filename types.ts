import { ReactNode } from 'react';

export interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
  strikethrough?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface SamplePaper {
  title: string;
  subject: string;
}

export interface Stat {
  value: string;
  label: string;
}
