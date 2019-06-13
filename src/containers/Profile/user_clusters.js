import Loading from 'components/Loading';
import React, { useContext } from 'react';
import { AuthContext } from 'contexts/auth_context';
import { Typography, Divider } from '@material-ui/core';

export default () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Loading size={50} />;

  return ['art', 'social', 'quantative'].map(
    track =>
      user.clusters &&
      user.clusters[track] && (
        <div>
          <Typography variant="h5">{track.toUpperCase()}</Typography>
          <Divider />
          {user.clusters[track].map(course => (
            <div>
              <Typography>{course.title}</Typography>
            </div>
          ))}
        </div>
      )
  );
};
