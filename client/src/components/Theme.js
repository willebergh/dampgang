import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MUThemeProvider } from '@material-ui/styles';

var theme = {
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
};

const themes = {
    ligth: createMuiTheme({
        ...theme,
        palette: {
            type: "light",
            primary: {
                light: "#FFFFFF",
                main: "#EFEFEF",
                dark: "#BDBDBD",
            },
            secondary: {
                light: "#7e6eFF",
                main: "#3441FF",
                dark: "0016CA"
            },
            background: {
                default: "#EFEFEF",
            }
        },
    }),
    dark: createMuiTheme({
        ...theme,
        palette: {
            type: "dark",
            primary: {
                light: "#595959",
                main: "#303030",
                dark: "#070707",
                contrastText: "#EFEFEF"
            },
            secondary: {
                light: "#7e6eFF",
                main: "#3441FF",
                dark: "0016CA"
            },
            background: {
                default: "#101010",
            }
        },
    })
}

function ThemeProvider({ children, activeTheme }) {
    return (
        <MUThemeProvider theme={themes[activeTheme]}>
            {children}
        </MUThemeProvider>
    )
}

export { ThemeProvider, theme }