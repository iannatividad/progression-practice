import { GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { GRID_THEME } from "./constants/theme";

import defaultTheme from "./themes/default";
import routes from "./constants/routes";
import { Home } from "./pages/Home/index";
import { QUERY_CLIENT } from "./constants/queryOptions";
import { Friday } from "./pages/Friday";
import Hunter from "./pages/Hunter";

function App() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <GridThemeProvider gridTheme={GRID_THEME}>
                    <QueryClientProvider client={QUERY_CLIENT}>
                        <Router>
                            <Switch>
                                <Route
                                    exact
                                    path={routes.ROOT}
                                    component={Home}
                                />
                                <Route
                                    exact
                                    path={routes.FRIDAY}
                                    component={Friday}
                                />
                                <Route
                                    exact
                                    path={routes.HUNTER}
                                    component={Hunter}
                                />
                            </Switch>
                        </Router>
                    </QueryClientProvider>
                </GridThemeProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
