import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { PostAddedPayload, PostDeletedPayload, PostFilterPayload } from '../model/postStore.types';
import { selectFilter, selectFilteredPosts } from '../store/postSelectors';
import { filterChanged, postAdded, postDeleted } from '../store/postSlice';

export const usePostsController = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectFilteredPosts);
  const filter = useAppSelector(selectFilter);


  const setFilter = useCallback((payload: PostFilterPayload) => {
    dispatch(filterChanged(payload));
  }, [dispatch]);

  const createPost = useCallback((payload: PostAddedPayload) => {
    dispatch(postAdded(payload));
  }, [dispatch]);

  const deletePost = useCallback((payload: PostDeletedPayload) => {
    dispatch(postDeleted(payload));
  }, [dispatch]);


  return {
    posts,
    filter,
    actions: {
      setFilter,
      createPost,
      deletePost,
    },
  };
};
