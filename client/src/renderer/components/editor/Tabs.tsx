import React, { useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectUsersFiles } from '../../../features/users/usersSlice';

const Tabs = () => {
  const usersFiles = useAppSelector(selectUsersFiles);
  useEffect(() => {
    console.log(usersFiles);
  }, [usersFiles]);
  return (
    <div className="tabs">
      {usersFiles.map((file) => {
        return <span>{file.name}</span>;
      })}
    </div>
  );
};

export default Tabs;
