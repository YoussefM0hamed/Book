export type Book = {
  id: number;
  name: string;
  price: number;
  image: any;
  category_id: number;
  description: string;

  count?: number;
};

export type Category = {
  id: number;
  name: string;
  image: any;
};

export type User = {
  id: number;
  email: string;
  name: string;
  password?: string;
};
