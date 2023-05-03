import { FullPageLayout } from '../components/layouts';
import { View, Text, TextInput } from 'react-native';

export default function Index() {
  return (
    <FullPageLayout>
      <Text className='text-first text-6xl font-title-900 w-full text-center pt-[20px]'>
        Open Chat
      </Text>
      <TextInput className='w-full border-b-[2px] border-third text-dark' />
    </FullPageLayout>
  );
}
