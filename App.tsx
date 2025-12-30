import React from 'react';
import { Provider } from 'react-redux';
import PostsScreen from './src/features/post/screens/PostsScreen';
import { store } from './src/store/store';

export default function App() {

  return (
    <Provider store={store}>
      <PostsScreen />
    </Provider>
  );
}