
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
}
