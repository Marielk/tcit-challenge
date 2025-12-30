import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import type { Post } from './src/features/post/model/post.types';
import { getPostsList } from './src/features/post/services/post.service';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setStatus('loading');
    setError(null);
    const result = await getPostsList();
    console.log(result)
    if (result.success) {
      setPosts(result.data);
      setStatus('success');
    } else {
      setStatus('error');
      setError(result.error);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      {status === 'loading' && <Text>Loading posts...</Text>}

      {status === 'error' && (
        <>
          <Text style={{ marginBottom: 12 }}>Error: {error}</Text>
          <Button title="Retry" onPress={load} />
        </>
      )}

      {status === 'success' && (
        <>
          <Text style={{ marginBottom: 12 }}>Posts loaded: {posts.length}</Text>
          <Text>{posts[0]?.name ?? 'No posts'}</Text>
          <View style={{ height: 12 }} />
          <Button title="Reload" onPress={load} />
        </>
      )}

      {status === 'idle' && <Text>Idle...</Text>}
    </View>
  );
}