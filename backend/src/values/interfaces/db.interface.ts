export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  name?: string;
  surname?: string;
  avatar?: string;
  accountState: string;
  street?: string;
  houseNumber?: string;
  apartmentNumber?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  deliveryAddress: Address[];
  bougthProducts: Product[];
  soldProducts: Product[];
  reviews: Review[];
  favoriteProducts: Favorite[];
  cartItems: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: number;
  name?: string;
  surname?: string;
  street?: string;
  houseNumber?: string;
  apartmentNumber?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  userId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: number;
  title: string;
  description?: string;
  categoryId: number;
  category: Category;
  parameters?: string;
  price: number;
  newPrice?: number;
  bougthByUsers: User[];
  soldByUserId: number;
  soldByUser: User;
  stateId: number;
  state: State;
  count: number;
  images: string[];
  reviews: Review[];
  variant: string[];
  favorites: Favorite[];
  cartItems: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  title: string;
  products: Product[];
}

export interface State {
  id: number;
  title: string;
  products: Product[];
}

export interface Review {
  id: number;
  reviewText?: string;
  reviewMark: number;
  productId: number;
  product: Product;
  userId: number;
  user: User;
  likes?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Favorite {
  id: number;
  userId: number;
  user: User;
  productId: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: number;
  userId: number;
  user: User;
  productId: number;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
