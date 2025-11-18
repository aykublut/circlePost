import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    photo?: string | null;
    location?: string | null;
    posts: string[];
    selectedMovies: string[];
    reviews: string[];
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    photo?: string | null;
    location?: string | null;
    posts: string[];
    selectedMovies: string[];
    reviews: string[];
  }
}
