import React, { Component } from 'react';
import { withStyles, AppBar, Toolbar, IconButton, Typography, Button, Switch } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const style = {
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            darkTheme: false
        }
    }

    handleThemeSwitch = e => {
        this.setState({ darkTheme: e.target.checked });
        this.props.updateState({ activeTheme: e.target.checked ? "dark" : "ligth" })
    }

    handleSidebarToggle = e => {
        this.props.updateState({ sidebarOpen: !this.props.open })
    }

    render() {
        const { classes } = this.props;
        const { darkTheme } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" onClick={this.handleSidebarToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6">
                            DampGang
                        </Typography>
                        <Switch checked={darkTheme} onChange={this.handleThemeSwitch} color="default" />
                        <Button>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(style)(Header);