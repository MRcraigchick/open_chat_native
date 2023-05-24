import { FullPageLayout } from '@/shared/layouts';
import { H1, P } from '@/shared/text';
import { Chat } from '@/shared/graphics/icons';
import { Button } from '@/shared/pressables';

export default function Landing() {
  return (
    <FullPageLayout>
      <H1 className='text-first w-full text-center'>Open Chat</H1>
      <Button text='Hello' />
    </FullPageLayout>
  );
}
