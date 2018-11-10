import { Typography } from "@material-ui/core";
import React from "react";

export default class ExpandNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.match.params.id
        };
    }

    render () {
        return (
            <Typography variant="h5" gutterBottom>
                News ID : {this.state.id}
            </Typography>
        )
    }
}