import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('remote/components/HeroSection'), {
  ssr: true,
});

const Home = (props) => {
  console.log(props);
  //@ts-ignore
  return <HeroSection slug={'home'} title={'Home'} backgroundColor={'#333'} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      title: 'hello',
    },
  };
};

export default Home;
