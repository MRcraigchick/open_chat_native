import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Input({
  register,
  name,
  rules = {},
  controlled = true,
  error,
  styles = {
    fontFamily: '',
    textColor: '',
    focusedColor: '',
    hoverColor: '',
    unfocusedColor: '',
    errorColor: '',
  },
  classNames = {
    container: '',
    input: '',
    label: '',
    error: '',
  },
  ...props
}) {
  return (
    <View className={`w-full ${classNames.container}`}>
      <TextInput
        {...props}
        {...register(name, rules)}
        error={Boolean(error)}
      />
      <Text className={`${classNames.error}`}>{error?.message}</Text>
    </View>
  );
}
