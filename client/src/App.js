import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import { ThemeProvider } from "./components/Theme"
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTheme: "ligth",
            sidebarOpen: false
        }
    }

    updateState = (newState) => {
        this.setState(newState);
    }

    render() {
        const { activeTheme, sidebarOpen } = this.state;
        return (
            <React.Fragment>
                <ThemeProvider activeTheme={activeTheme}>
                    <CssBaseline />
                    <Header open={sidebarOpen} updateState={this.updateState} />
                    <Sidebar open={sidebarOpen} updateState={this.updateState} />
                </ThemeProvider>
            </React.Fragment>
        )
    }
}

export default App;