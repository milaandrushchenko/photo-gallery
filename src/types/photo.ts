export interface Photo {
  id: string;
  width: number;
  height: number;
  alt_description: string | null;
  description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
    };
  };
}

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
