export interface Photo {
  id: string;
  width: number;
  height: number;
  alt_description: string | null;
  description: string | null;
  likes: number;

  created_at: string;

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

  tags?: {
    type: string;
    title: string;
  }[];

  exif?: {
    make: string | null;
    model: string | null;
    exposure_time: string | null;
    aperture: string | null;
    focal_length: string | null;
    iso: number | null;
  } | null;
}

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
