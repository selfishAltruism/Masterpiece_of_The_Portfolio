declare namespace Data {
  export interface Career {
    id: number;
    company: string;
    position: string;
    description: string;
    period: string;
    homepage: string;
  }

  export interface Activity {
    id: number;
    name: string;
    position: string;
    description: string;
    period: string;
    result?: string;
    teamLink?: string;
    companyLink?: string;
  }

  export interface Development {
    id: number;
    linkedTo: string;
    linkedId: number;
    title: string;
    description: string;
    period: string;
    tags: string[];
    techStacks: string[];
    link: string;
  }
}
