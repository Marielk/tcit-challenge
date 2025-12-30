import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { tokens } from '../../../theme/tokens';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Table({ children, style }: Props) {
  return (
    <View
      style={[
        {
          borderWidth: tokens.border.width,
          borderColor: tokens.color.ink,
          backgroundColor: tokens.color.background,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
