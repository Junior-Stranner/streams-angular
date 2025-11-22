export interface Content {
  id: string;
  title: string;
  type: string;
  description: string;
  synopsis: string;
  releaseYear: number;
  duration: number;
  categoryId: number;
  director: string;
  cast: string[];
  rating: string;
  thumbnail: string;
  banner: string;
  featured: boolean;
  views: number;
  likes: number;
  imdbRating: number;
}
