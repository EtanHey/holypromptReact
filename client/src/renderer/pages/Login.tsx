import { changeStatus } from '../../features/users/usersSlice';
import { useAppDispatch } from '../../app/hooks';
import { getUsersInfoThunk } from '../../features/users/usersAPI';

const cor = { email: 'Cz0har200@gmail.com', password: 'corzoh' };
const dor = { email: 'dzohar100@gmail.com', password: 'dorzoh' };
const etan = { email: 'etan@heyman.net', password: 'etanhey' };
const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(getUsersInfoThunk(cor));
      }}
    >
      login
    </button>
  );
};

export default Login;
