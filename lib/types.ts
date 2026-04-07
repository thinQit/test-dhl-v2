export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  highlights: string[];
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface CaseStudy {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  href: string;
}

export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
