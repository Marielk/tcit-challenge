import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateID } from '../../../../src/shared/utils/idGenerator';
import { Post } from '../model/post.types';
import {
  PostAddedPayload,
  PostDeletedPayload,
  PostFilterPayload,
  PostsState
} from '../model/postStore.types';

const initialState: PostsState = {
  items: [],
  filter: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //Load initial list
    postsLoaded: (state, action: PayloadAction<Post[]>) => {
      state.items = action.payload;
    },
    // Create Post
    postAdded: (state, action: PayloadAction<PostAddedPayload>) => {
      const {name, description} = action.payload;
      const id = generateID();
      state.items.unshift({
        id,
        name: name.trim(),
        description: description.trim(),
        createdAt: new Date().toISOString(),
      })
    },
    // Remove Post
    postDeleted: (state, action: PayloadAction<PostDeletedPayload>) => {
      const { id } = action.payload;
      state.items = state.items.filter((post) => post.id !== id);
    },
    // Filter Posts
    filterChanged: (state, action: PayloadAction<PostFilterPayload>) => {
      state.filter = action.payload.filter;
    },
  }
});

export const {postsLoaded, postAdded, postDeleted, filterChanged} = postsSlice.actions;
export default postsSlice.reducer;