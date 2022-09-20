import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  {
    user(id: "1") {
      firstName
      age
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(QUERY);

  return (
    <div>
      {loading ? (
        <pre>Loading...</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Home;
