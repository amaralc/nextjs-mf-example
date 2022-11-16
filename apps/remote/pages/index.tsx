import HeroSection from '../components/HeroSection';

const RemoteIndex = () => {
  return <HeroSection slug="remote" title="Remote" backgroundColor="#33f" />;
};

RemoteIndex.getInitialProps = async () => {
  return {
    props: {
      title: 'hello',
    },
  };
};

export default RemoteIndex;
