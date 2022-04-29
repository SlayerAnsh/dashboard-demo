export interface DemoAPI {
  count: number;
  entries: DemoEntry[];
}

export interface DemoEntry {
  API: string;
  Description: string;
  Category: string;
  Link: string;
}