export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  img: string;
  otherImages: {
    id: number;
    img: string;
  }[];
}

export interface NavbarProps {
  firstDivClasses: string;
  secondDivClasses: string;
}

