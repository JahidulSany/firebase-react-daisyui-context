import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h2>Home --- {user && <span>{user.email}</span>}</h2>
    </div>
  );
};

export default Home;
