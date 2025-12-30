import { useAppSelector } from '@/src/store/hooks';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useSetPostsHook } from '../hooks/setPosts';
import { selectFilteredPosts } from '../store/postSelectors';

export default function PostsScreen() {
  const posts = useAppSelector(selectFilteredPosts);
  const { status, error } = useSetPostsHook();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay posts</Text>}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, padding: 10, marginBottom: 8 }}>
            <Text style={{ fontWeight: '700' }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>{item.id}</Text>

            <View style={{ marginTop: 8 }}>
              <Button
                title="Eliminar"
                onPress={() => { }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
