import { PostAddedPayload, PostDeletedPayload, PostFilterPayload } from '../model/postStore.types';
import { Post } from './post.types';

export type PostFormProps = {
  onCreate: (postInfo: PostAddedPayload) => void;
};

export type PostListProps = {
  posts: Post[];
  onDelete: (postInfo: PostDeletedPayload) => void;
};

export type PostItemProps = {
  post: Post;
  onDelete: (postInfo: PostDeletedPayload) => void;
  index: number;
};

export type FilterProps = {
  onSearch: (filter: PostFilterPayload) => void;
};