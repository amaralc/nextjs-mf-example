import HeroSection from '../components/HeroSection';

const Home = (props) => {
  console.log(props);
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
