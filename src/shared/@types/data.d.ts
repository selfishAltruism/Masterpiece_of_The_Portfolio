declare namespace Data {
  export interface Career {
    id: number;
    company: string;
    position: string;
    type: string;
    period: string;
    homepage: string;
  }

  export interface Activity {
    id: number;
    name: string;
    description: string;
    period: string;
    result: string;
    link: string;
  }
}
