import { changeStatus } from '../../features/markers/markersSlice';
import { useAppDispatch } from '../../app/hooks';

const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(changeStatus());
      }}
    >
      login
    </button>
  );
};

export default Login;
