import { useEffect } from 'react';
import Users from '../components/Users';
// import { connect } from 'react-redux';
import { getUsers } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';
// import { Preloader } from '../lib/PreloaderContext';
import { useDispatch, useSelector } from 'react-redux';
const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  //컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) return; //users가 이미 유효하다면 요청하지 않음
    dispatch(getUsers());
  }, [dispatch, users]);

  return (
    <>
      <Users users={users} />
      <Preloader resolve={() => dispatch(getUsers)} />
    </>
  );
};

export default UsersContainer;

// const { useEffect } = React;

// const UsersContainer = ({ users, getUsers }) => {
//   // 컴포넌트 마운트될 때 호출
//   useEffect(() => {
//     if (users) return; // users가 이미 유효하다면 요청하지 않음
//     getUsers();
//   }, [getUsers, users]);
//   return (
//     <>
//       <Users users={users} />
//       <Preloader resolve={getUsers} />
//     </>
//   );
// };

// export default connect(
//   (state) => ({
//     users: state.users.users,
//   }),
//   {
//     getUsers,
//   }
// )(UsersContainer);
