import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// I sill didn't try to import types from remotes, so here they are redefined (until I understand how to do it right)
export interface IHeroSectionProps {
  title: string;
  slug: string;
  backgroundColor: string;
}

// I sill didn't try to import types from remotes, so here they are redefined (until I understand how to do it right)
export type IHeroSection = (props: IHeroSectionProps) => JSX.Element;

const HeroSection = dynamic(() => import('remote/components/HeroSection'), {
  suspense: true,
}) as IHeroSection; // This is suppose to fix a type error I was getting when

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
