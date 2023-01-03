import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MM1 from './MM1';
import MG1 from './MG1';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="M/M/C" value="1" />
            <Tab label="M/G/1" value="2" />
            <Tab label="M/M/C/K" value="3" />
            <Tab label="M/M/C/*/M" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><MM1/></TabPanel>
        <TabPanel value="2"><MG1/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}