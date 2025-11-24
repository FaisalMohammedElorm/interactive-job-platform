export interface User {
  name: string;
  title: string;
  email: string;
  hasResume: boolean;
  hasCV: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  featured: boolean;
  category: string;
  postedAt: string;
  saved?: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  category: string;
  rating: number;
  students: number;
  price: number;
  thumbnail: string;
  description: string;
  lessons: number;
}
