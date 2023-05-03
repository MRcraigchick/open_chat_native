import { View } from 'react-native';

export default function FullPageLayout({ children }) {
  return <View className='p-[20px] font-body-400 text-dark'>{children}</View>;
}
