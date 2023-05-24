import { FullPageLayout } from '@/shared/layouts';
import { H1, P } from '@/shared/text';
import { Chat as ChatIcon } from '@/shared/graphics/icons';
import { Button } from '@/shared/pressables';
import { View } from 'react-native';

export default function Landing() {
  return (
    <FullPageLayout className=''>
      <H1 className='text-first w-full text-center mb-[50px]'>Open Chat</H1>
      <ChatIcon className='h-[400px] mb-[30px]' />
      <Button
        label='Sign Up'
        classNames={{
          container: 'bg-third mb-[20px] md:max-w-[300px] ',
        }}
      />
      <Button
        label='Login'
        classNames={{
          container: 'bg-third md:max-w-[300px]',
        }}
      />
    </FullPageLayout>
  );
}
