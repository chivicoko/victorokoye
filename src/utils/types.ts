export interface leadsProps {
  id: number;
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
}

export interface leadsProps2 {
  lead: {
    id: number;
    name: string;
    badge: string;
    topic: string;
    img: string;
    position: string;
    at: string;
    icon: object;
    description: string;
    footerWriteup1: string;
    footerWriteup2: string;
  }
}

export interface CarouselProps {
  slides: { 
    id: number;
    imageSrc: string;
    alt: string;
    title: string
  }[];
}

export interface leadModalProps {
  handleLeadToggle: () => void;
}

export interface activitiesModalProps {
  handleActivitiesToggle: () => void;
}

export interface leadDetailsModalProps {
  handleLeadDetailsToggle: () => void;
}

export interface Lead {
  id: number;
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
}

export type LeadKeys = keyof Lead;

export interface SortConfig {
  key: LeadKeys;
  direction: 'asc' | 'desc';
}

export interface NavbarProps {
  firstDivClasses: string;
  secondDivClasses: string;
}

