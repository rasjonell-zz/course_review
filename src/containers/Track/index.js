import React, { useEffect, useState, useContext } from 'react';
import history from 'config/history';
import Fab from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { AuthContext } from 'contexts/auth_context';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import { getRequirements, getTrackCourses } from 'helpers/cluster_helper';

import styles from './styles';

export default withStyles(styles)(({ match: { params: { track } }, classes }) => {
  const { user, setUser } = useContext(AuthContext);
  const [suggestions, setSuggestions] = useState(null);
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

  const handleSave = () => {
    const clusters = { ...user.clusters, [track]: clusterCourses };
    setUser({ ...user, clusters });
    history.push('/profile');
  };

  const handleChipClick = (course, level) => {
    const newLevelSuggestions = suggestions[level].filter(({ title }) => title !== course.title);
    const newSuggestions = {
      ...suggestions,
      [level]: newLevelSuggestions
    };
    const newClusters = [...clusterCourses, course];
    setClusterCourses(newClusters);
    setSuggestions(newSuggestions);
  };

  const SuggestedCourse = level => (
    <div className={classes.field}>
      <Typography variant="h6">
        {suggestions[level].length} {level} course(s)
      </Typography>
      {suggestions[level].map(course => (
        <div>
          <Chip
            color="primary"
            key={course.title}
            label={course.title}
            onClick={() => handleChipClick(course, level)}
          />
        </div>
      ))}
    </div>
  );

  const RenderValues = selected => (
    <div className={classes.chips}>
      {selected.map(({ title }) => (
        <Chip color="primary" key={title} label={title} className={classes.chip} />
      ))}
    </div>
  );

  const MenuItems = trackCourses.map(course => (
    <MenuItem key={course.title} value={course}>
      <Checkbox checked={!!clusterCourses.filter(({ id }) => id === course.id).length} />
      <ListItemText primary={course.title} />
    </MenuItem>
  ));

  const SuggestedCourses = suggestions && (
    <>
      <Typography variant="h5">You Need To Take</Typography>
      <div>{!!suggestions.lower.length && SuggestedCourse('lower')}</div>
      <div>{!!suggestions.upper.length && SuggestedCourse('upper')}</div>
    </>
  );

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
            renderValue={selected => RenderValues(selected)}
          >
            {MenuItems}
          </Select>
        </FormControl>
      </div>
      <div className={classes.field}>
        <Fab color="primary" variant="extended" aria-label="Track" onClick={handleOnClick}>
          Get Suggestions
        </Fab>
      </div>
      <div className={classes.field}>{SuggestedCourses}</div>
      <div className={classes.field}>
        <Fab color="secondary" variant="extended" aria-label="Track" onClick={handleSave}>
          Save Suggestions
        </Fab>
      </div>
    </div>
  );
});
