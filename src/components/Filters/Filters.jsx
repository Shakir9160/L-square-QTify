import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styles from "./Filters.module.css";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
        variant="scrollable"
        scrollButtons="auto"
      >
        {filters.map((ele, idx) => (
          <Tab
            key={idx}
            className={styles.tab}
            label={ele.label}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default Filters;
