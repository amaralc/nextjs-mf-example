const RemoteIndex = () => {
  return (
    <div>
      <h1>Remote Index</h1>
    </div>
  );
};

RemoteIndex.getInitialProps = async () => {
  return {
    props: {
      title: 'hello',
    },
  };
};

export default RemoteIndex;
