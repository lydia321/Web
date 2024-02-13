export interface Joke {
  joke?: string;
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  id: number;
  lang: string;
  safe: boolean;
  flags: object;
}