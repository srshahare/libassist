import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import classes from './AllStudents.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StudentTable from '../../../components/Student/StudentTable';
import AddStudent from '../../../components/Student/AddStudent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

const AllStudents = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.AllStudents}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="All Students"/>
        <Tab label="Add Student" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StudentTable
          students={props.students} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddStudent
          inputChange={props.change}
          click={props.click}/>
      </TabPanel>
    </Paper>
  );
}
export default AllStudents;