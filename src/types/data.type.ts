interface imageType {
  png: string;
  webp: string;
}

interface ListDestination {
  name: string;
  images: imageType;
  description: string;
  distance: string;
  travel: string;
}

interface ListCrew {
  name: string;
  images: imageType;
  role: string;
  bio: string;
}

interface ImgTechnology {
  portrait: string;
  landscape: string;
}

interface ListTechnology {
  name: string;
  images: ImgTechnology;
  description: string;
}

export interface DataType {
  destinations: ListDestination[];
  crew: ListCrew[];
  technology: ListTechnology[];
}
