import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import LactoSafeTable from "../Table";

interface tabsProps {
  tabList: Array<string>;
}

const LactoSafeTab: React.FC<tabsProps> = ({ tabList }) => {
  const [tabValue, setTabValue] = useState('0');
  const headerList = ["id", "firstName", "LastName"];
  const rowList = [{ id: "1", firstName: "venkat", lastName: "kumar" }];

  return (
    <Box>
      <TabContext value={tabValue}>
        <Box>
          <TabList onChange={(event, value) => setTabValue(value)}>
            {tabList.map((tab, index) => (
              <Tab key={index} label={tab} value={index.toString()} />
            ))}
          </TabList>
        </Box>
        <TabPanel value={tabValue}>
        <LactoSafeTable key={tabValue} header={headerList} rows={rowList}></LactoSafeTable>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LactoSafeTab;
