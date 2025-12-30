import { sharedStyles } from '@/src/theme/styles';
import { tokens } from '@/src/theme/tokens';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { TableCell, TableRow } from '../../../../src/shared/components';
import { tableList } from '../constants/textContent';
import { PostItemProps } from '../model/componentsProps.types';


export default function PostItem({ post, onDelete, index }: PostItemProps) {
  const isEvenRow = index % 2 === 0;

  return (
    <TableRow style={isEvenRow ? { backgroundColor: tokens.color.lightGray } : { backgroundColor: tokens.color.background }}>
      <TableCell style={{ width: '25%' }}>
        <Text style={sharedStyles.textBase} numberOfLines={1}>
          {post.name}
        </Text>
      </TableCell>

      <TableCell style={{ width: '50%' }}>
        <Text style={sharedStyles.textBase} numberOfLines={2}>
          {post.description}
        </Text>
      </TableCell>

      <TableCell style={{ width: '25%' }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Eliminar ${post.name}`}
          onPress={() => onDelete({ id: post.id })}
          style={({ pressed }) => [styles.deleteButton, pressed && styles.deleteButtonPressed]}
        >
          <Text style={[sharedStyles.textBase]}>
            {tableList.tableActionButton}
          </Text>
        </Pressable>
      </TableCell>
    </TableRow>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  deleteButtonPressed: {
    opacity: 0.7,
  },
});
