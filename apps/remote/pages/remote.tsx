import dynamic from 'next/dynamic';
import { Suspense } from 'react';

//@ts-ignore
const HeroSection = dynamic(() => import('shell/components/HeroSection'), {
  suspense: true,
});

const Remote = () => {
  return (
    <Suspense>
      {/*@ts-ignore */}
      <HeroSection slug={'remote'} title={'Remote'} backgroundColor={'#33f'} />
    </Suspense>
  );
};

export default Remote;
