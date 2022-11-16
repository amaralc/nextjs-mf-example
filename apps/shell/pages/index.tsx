import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(() => import('remote/components/HeroSection'), {
  suspense: true,
});

const Home = (props) => {
  console.log(props);

  return (
    <Suspense>
      {/* @ts-ignore */}
      <HeroSection slug={'home'} title={'Home'} backgroundColor={'#333'} />
    </Suspense>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      title: 'hello',
    },
  };
};

export default Home;
