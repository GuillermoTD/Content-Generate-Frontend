export interface Blog {
  id: number;
  title: string;
  preview: string;
  status: string;
  category: string;
  date: string;
  wordCount: number;
}

export interface BlogHistoryProps {
  blogs: Blog[];
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  platform: string;
  duration: string;
  status: string;
  scriptLength: string;
}

export interface VideoHistoryProps {
  videos: Video[];
}

export interface Image {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  status?: string;
  resolution: string;
  style: string;
  purpose: string;
}

export interface ImagesHistoryProps {
  images: Image[];
}
