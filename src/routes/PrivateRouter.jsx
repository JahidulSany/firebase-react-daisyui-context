import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRouter;
