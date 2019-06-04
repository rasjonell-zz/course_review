import React, { useEffect, useState, useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { getRequirements, getTrackCourses } from 'helpers/cluster_helper';

export default ({
  match: {
    params: { track }
  }
}) => {
  const [requirements, setRequirements] = useState(null);
  const [trackCourses, setTrackCourses] = useState([]);
  const [clusterCourses, setClusterCourses] = useState([]);

  useEffect(() => {
    const func = async () => {
      const courses = await getTrackCourses(track);
      setTrackCourses(courses);
    };
    func();
  }, []);

  const renderRequirements = () =>
    requirements && (
      <div>
        <div>
          {requirements.lower > 0 && (
            <span>You need to take {requirements.lower} Lower elective</span>
          )}
        </div>
        <div>
          {requirements.upper > 0 && (
            <span>You need to take {requirements.upper} Upper elective</span>
          )}
        </div>
        <div>
          {requirements.any > 0 && (
            <span>You need to take {requirements.any} either lower or upper elective</span>
          )}
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="select-multiple-chip">Courses You Have Taken</InputLabel>
          <Select
            multiple
            value={clusterCourses}
            onChange={({ target: { value } }) => setClusterCourses(value)}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div>
                {selected.map(({ title }) => (
                  <Chip key={title} label={title} />
                ))}
              </div>
            )}
          >
            {trackCourses.map(course => (
              <MenuItem key={course.title} value={course}>
                {course.title} {course.clusters.map(n => Number(n)).join(' ')}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Fab
          variant="extended"
          aria-label="Track"
          onClick={() => setRequirements(getRequirements(clusterCourses))}
        >
          Get Requirements
        </Fab>
      </div>
      <div>{renderRequirements()}</div>
    </div>
  );
};
