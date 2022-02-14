export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time?: number;
  time_ago?: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface Item {
  id: number;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[]; // Comments are items too
  level: number;
  comments_count: number;
}
