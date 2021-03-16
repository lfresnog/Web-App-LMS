import axios from 'axios';

const Home = ({ users, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:5004/users');
    const users = res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};

export default Home;