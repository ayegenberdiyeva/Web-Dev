export interface Product {
  id: number;
  name?: string;
  description?: string;
  rating?: number;
  imageUrl?: string;
  link: string;
  likes: number;
  categoryid?: number;
}
