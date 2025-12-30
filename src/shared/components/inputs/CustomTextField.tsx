import { tokens } from '@/src/theme/tokens';
import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import { sharedStyles } from '../../../theme/styles';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  accessibilityLabel?: string;
  multiline?: boolean;
  numberOfLines?: number;
  returnKeyType?: 'done' | 'next' | 'search';
  onSubmitEditing?: () => void;
  style?: StyleProp<TextStyle>;
};

export default function TextField({
  value,
  onChangeText,
  placeholder,
  accessibilityLabel,
  multiline,
  numberOfLines,
  returnKeyType,
  onSubmitEditing,
  style,
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={tokens.color.inkSoft}
      accessibilityLabel={accessibilityLabel}
      autoCorrect={false}
      autoCapitalize="none"
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={multiline ? 'top' : 'center'}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      style={[sharedStyles.input, style]}
    />
  );
}
