import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MM1 from './MM1';
import MG1 from './MG1';
import MMC from './MMC';
import MGC from './MGC';

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
            <Tab label="M/M/1" value="1" />
            <Tab label="M/M/C" value="2" />
            <Tab label="M/G/C" value="3" />
            {/* <Tab label="M/G/2" value="4" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"><MM1/></TabPanel>
        <TabPanel value="2"><MMC/></TabPanel>
        <TabPanel value="3"><MGC/></TabPanel>
        {/* <TabPanel value="4"><MGC/></TabPanel> */}
      </TabContext>
    </Box>
  );
}