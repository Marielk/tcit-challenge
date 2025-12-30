import { Post } from './post.types';

export type PostsState = {
  items: Post[];
  filter: string;
};

export type FetchPostReject = { rejectValue: string };
export interface PostAddedPayload {
   name: string; description: string
}
export interface PostDeletedPayload {
   id: string;
}
export interface PostFilterPayload {
   filter: string;
}

