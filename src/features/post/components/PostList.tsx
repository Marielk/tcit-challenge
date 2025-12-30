import { tokens } from '@/src/theme/tokens';
import React from 'react';
import { FlatList, Text } from 'react-native';
import { Table, TableCell, TableRow } from '../../../../src/shared/components';
import { sharedStyles } from '../../../../src/theme/styles';
import { tableList } from '../constants/textContent';
import { PostListProps } from '../model/componentsProps.types';
import PostListItem from './PostItem';



export default function PostList({ posts, onDelete, }: PostListProps) {
  return (
    <Table>
      <TableRow style={{ backgroundColor: tokens.color.darkGray }}>
        <TableCell style={{ width: '25%' }}>
          <Text style={sharedStyles.tableHeaderText}>
            {tableList.tableHeadName}
          </Text>
        </TableCell>
        <TableCell style={{ width: '50%' }}>
          <Text style={sharedStyles.tableHeaderText}>
            {tableList.tableHeadDescription}
          </Text>
        </TableCell>
        <TableCell style={{ width: '25%' }}>
          <Text style={sharedStyles.tableHeaderText}>
            {tableList.tableHeadAction}
          </Text>
        </TableCell>
      </TableRow>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator
        ListEmptyComponent={<Text>No hay posts</Text>}
        renderItem={({ item, index }) => <PostListItem post={item} onDelete={onDelete} index={index} />}
      />
    </Table>
  );
}
