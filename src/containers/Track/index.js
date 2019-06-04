import React, { useEffect, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import { getRequirements, getTrackCourses } from 'helpers/cluster_helper';

import styles from './styles';

export default withStyles(styles)(({ match: { params: { track } }, classes }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [trackCourses, setTrackCourses] = useState([]);
  const [clusterCourses, setClusterCourses] = useState([]);

  useEffect(() => {
    const func = async () => {
      const courses = await getTrackCourses(track);
      setTrackCourses(courses);
    };
    func();
  }, []);

  const handleOnClick = async () => {
    const requirements = await getRequirements(clusterCourses, track);
    setSuggestions(requirements);
  };

  const MenuItems = trackCourses.map(course => (
    <MenuItem key={course.title} value={course}>
      <Checkbox checked={!!clusterCourses.filter(({ id }) => id === course.id).length} />
      <ListItemText primary={course.title} />
    </MenuItem>
  ));

  const SuggestedCourses = suggestions.length
    ? suggestions.map(course => (
        <Typography variant="h6">
          {course.title} - {course.clusters}
        </Typography>
      ))
    : null;

  return (
    <div className={classes.root}>
      <div className={classes.field}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Courses You Have Taken</InputLabel>
          <Select
            multiple
            value={clusterCourses}
            onChange={({ target: { value } }) => setClusterCourses(value)}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(({ title }) => (
                  <Chip key={title} label={title} className={classes.chip} />
                ))}
              </div>
            )}
          >
            {MenuItems}
          </Select>
        </FormControl>
      </div>
      <div className={classes.field}>
        <Fab variant="extended" aria-label="Track" onClick={handleOnClick}>
          Get Suggestions
        </Fab>
      </div>
      <div className={classes.field}>{SuggestedCourses}</div>
    </div>
  );
});
