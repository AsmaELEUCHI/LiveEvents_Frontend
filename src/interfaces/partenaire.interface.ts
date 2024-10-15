export interface Partner{
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    description: string;
    link:{
        title: string;
        url: string
    }
  };
}