import {
  Container,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppRouter from "./routes";
import "./styles/index.scss";
import { createContext } from "react";

interface screenWidthContextInterface {
  mobileScreen: boolean;
}

export const screenWidthCxt = createContext<screenWidthContextInterface | null>(
  null
);

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const screenWidthContext: screenWidthContextInterface = {
    mobileScreen: matches,
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <div className="app">
          <screenWidthCxt.Provider value={screenWidthContext}>
            <AppRouter />
          </screenWidthCxt.Provider>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
