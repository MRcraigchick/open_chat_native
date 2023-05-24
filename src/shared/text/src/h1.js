import { Text } from 'react-native';

export default function H1({ children, ...props }) {
  return (
    <Text
      {...props}
      className={`pt-[10px] text-6xl font-title-900 w-full ${
        props?.className && props.className
      }`}>
      {children}
    </Text>
  );
}
