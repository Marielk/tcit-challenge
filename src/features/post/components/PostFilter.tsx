import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { OutlinedButton, TextField } from '../../../../src/shared/components';
import { sharedStyles } from '../../../../src/theme/styles';
import { tokens } from '../../../../src/theme/tokens';
import { filterBar } from '../constants/textContent';
import { FilterProps } from '../model/componentsProps.types';


export default function PostFilterBar({ onSearch }: FilterProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    Keyboard.dismiss();
    onSearch({ filter: inputValue });
  };

  return (
    <View style={[sharedStyles.row, { paddingBottom: tokens.spacing.lg }]} accessibilityRole="search">
      <TextField
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholder={filterBar.inputPlaceHolder}
        style={{ marginRight: tokens.spacing.lg }}
      />
      <OutlinedButton title={filterBar.primary} onPress={handleSearch} />
    </View>
  );
}

