import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { sharedStyles } from '../../../theme/styles';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function TableRow({ children, style }: Props) {
  return <View style={[sharedStyles.tableRow, style]}>{children}</View>;
}
