import { OutlinedButton, TextField } from '@/src/shared/components';
import { sharedStyles } from '@/src/theme/styles';
import { tokens } from '@/src/theme/tokens';
import React, { useMemo, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { postForm } from '../constants/textContent';
import { PostFormProps } from '../model/componentsProps.types';


export default function PostForm({ onCreate }: PostFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const isDisabled = useMemo(() => {
    return name.trim().length < 1 || description.trim().length < 1;
  }, [name, description]);

  const handleSubmit = () => {
    if (isDisabled) return;
    onCreate({ name, description });
    setName('');
    setDescription('');
    Keyboard.dismiss();
  };

  return (
    <View style={[sharedStyles.row, { paddingTop: tokens.spacing.lg }]}>
      <TextField
        value={name}
        onChangeText={setName}
        placeholder={postForm.inputName}
        style={{ width: '35%' }}
      />
      <TextField
        value={description}
        onChangeText={setDescription}
        placeholder={postForm.inputDescription}
        style={{ width: '35%' }}
      />
      <OutlinedButton title={postForm.primary} onPress={handleSubmit} />
    </View>
  );
}
