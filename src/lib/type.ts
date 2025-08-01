export interface NavLinks {
  label: string;
  href: string;
}

export interface FooterLinks {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface AudienceBlock {
  title: string;
  benefits: string[];
}

export interface Testimonial {
  avatar: string;
  text: string;
  author: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
