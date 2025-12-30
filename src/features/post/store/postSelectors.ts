import type { RootState } from '../../../store/store';
import { Post } from '../model/post.types';

export const selectPostsState = (state: RootState) => state.posts;

export const selectAllPosts = (state: RootState) => selectPostsState(state).items;
export const selectFilter = (state: RootState) => selectPostsState(state).filter;

export const selectFilteredPosts = (state: RootState) => {
  const {items, filter} = selectPostsState(state);
  const filterTextClean = filter.trim().toLowerCase();
  if(!filterTextClean) {
    return items;
  } else {
    const foundItems = items.filter((post: Post) => post.name.toLowerCase().includes(filterTextClean));
    return foundItems;
  }
}