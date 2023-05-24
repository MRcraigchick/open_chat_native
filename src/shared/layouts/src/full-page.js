import { View } from 'react-native';

export default function FullPageLayout({ style = {}, children }) {
  return (
    <View
      style={style}
      className={`flex flex-1 p-[30px] font-body-400 text-dark`}>
      {children}
    </View>
  );
}
