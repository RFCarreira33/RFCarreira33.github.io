interface Example {
  main: string;
  src: string;
}

export interface IProject {
  id: number;
  priority: number;
  title: string;
  upload: string;
  sm_description: string;
  lg_description: string;
  what_is_it: string;
  lang: string;
  source: string;
  examples: Example[];
}



