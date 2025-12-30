import React from 'react';
import { View } from 'react-native';
import { tokens } from '../../../../src/theme/tokens';
import PostFilterBar from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { usePostsController } from '../hooks/usePostsController';
import { useSetPostsHook } from '../hooks/useSetPosts';
import { PostAddedPayload, PostDeletedPayload, PostFilterPayload } from '../model/postStore.types';

export default function PostsScreen() {
  const { status, error } = useSetPostsHook();
  const { posts, actions } = usePostsController();

  const onCreate = (postInfo: PostAddedPayload) => {
    actions.createPost(postInfo);
  };

  const onDelete = (postInfo: PostDeletedPayload) => {
    actions.deletePost(postInfo)
  };

  const onFilter = (filter: PostFilterPayload) => {
    actions.setFilter(filter);
  };

  return (
    <View style={{ flex: 1, paddingTop: 200, paddingHorizontal: tokens.spacing.lg }}>
      <PostFilterBar onSearch={(payload) => onFilter(payload)} />
      <PostList posts={posts} onDelete={(payload) => onDelete(payload)} />
      <PostForm onCreate={(payload) => onCreate(payload)} />
    </View>
  );
}
