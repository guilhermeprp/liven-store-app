type Product = {
  id: string;
  image: string;
  price: number;
  quantity: number;
  title: string;
  rating?: Rating;
};

type Rating = {
  count: string;
  rate: string;
};
