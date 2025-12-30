import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { sharedStyles } from '../../../theme/styles';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

export default function OutlinedButton({
  title,
  onPress,
  disabled,
  accessibilityLabel,
  style,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        sharedStyles.outlinedButton,
        pressed && !disabled && sharedStyles.outlinedButtonPressed,
        disabled && { opacity: 0.45 },
        style,
      ]}
    >
      <Text style={sharedStyles.outlinedButtonText}>{title}</Text>
    </Pressable>
  );
}
