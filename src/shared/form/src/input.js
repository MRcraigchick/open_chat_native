import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
import { tailwindConfig } from '@/lib/tailwind-util';

const { theme } = tailwindConfig();

export default function Input({
  name,
  control,
  error,
  helperText,
  rules,
  wrapperStyle,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onBlur, onChange, value } }) => {
        return (
          <View style={wrapperStyle}>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              {...props}
            />
            <HelperText
              type='error'
              visible={error}>
              {helperText}
            </HelperText>
          </View>
        );
      }}
    />
  );
}
