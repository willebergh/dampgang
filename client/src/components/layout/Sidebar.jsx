import React, { Component } from 'react';
import { withStyles, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";

const style = {

}

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.setState({ open: this.props.open })
        }
    }

    handleClose = e => {
        this.props.updateState({ sidebarOpen: false })
    }

    render() {
        const { open } = this.state;
        return (
            <Drawer open={open} onClose={this.handleClose}>
                <List>
                    {["Home", "Apps", "Profile", "Settings"].map(item => (
                        <ListItem button>
                            <ListItemText>
                                {item}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default withStyles(style)(Sidebar);