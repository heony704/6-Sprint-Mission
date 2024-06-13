interface Writer {
  id: number;
  nickname: string;
}

interface WriterWithImage extends Writer {
  image: string | null;
}

export interface Board {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface BoardWithLiked extends Board {
  isLiked: boolean;
}

export interface BoardComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: WriterWithImage;
}
