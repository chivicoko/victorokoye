export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  img: string;
  githubLink: string;
  liveDemoLink?: string;
  otherImages: {
    id: number;
    img: string;
  }[];
}

export interface ProjectProps2 {
  id: string;
  name: string;
  description: string;
  githubLink: string;
  images?: string[];
  liveDemoLink?: string;
}


export interface NavbarProps {
  firstDivClasses: string;
  secondDivClasses: string;
}

export interface FormProps {
  project?: {
    name: string;
    description: string;
    githubLink: string;
    images: string[];
    liveDemoLink?: string;
  };
  onSubmitProject: (data: Omit<ProjectProps2, 'id'>, isEdit: boolean) => void;
}
