import { FullPageLayout } from '@/shared/layouts';
import { H1, P } from '@/shared/text';
import { Chat as ChatIcon } from '@/shared/graphics/icons';
import { Button } from '@/shared/pressables';
import { View } from 'react-native';

export default function Landing() {
  return (
    <FullPageLayout className='my-[50px]'>
      <H1 className='text-first w-full text-center'>Open Chat</H1>
      <View className='flex flex-1 mx-[10px]'>
        <ChatIcon className='h-[400px]' />
        <View className='mt-auto'>
          <Button
            label='Sign Up'
            classNames={{
              container: 'bg-third mb-[20px]',
            }}
          />
          <Button
            label='Login'
            classNames={{
              container: 'bg-third',
            }}
          />
        </View>
      </View>
    </FullPageLayout>
  );
}
