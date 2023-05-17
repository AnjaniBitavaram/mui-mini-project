import {Box, Stack, ThemeProvider, createTheme} from "@mui/material";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Add from "./Components/Add";
import {useState} from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
