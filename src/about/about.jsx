import React from "react";
import { Typography } from "@material-ui/core";
import "./about.css";

export default class About extends React.Component {
    render() {
        return  (
            <React.Fragment>
                <div className='title'>
                    <Typography variant="title" gutterBottom>
                        About page
                    </Typography>
                </div>
                <div className='about-content'>
                    <Typography variant="subheading" gutterBottom>
                        This SPA was created for "JavaScript for Enterprise development" course.
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        It represents some kind of portal about cryptocurrency with data representations.
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        For example, you can find some cryptocurrency pricings and line charts on Home page. Also, there are news section, where you can see 50 latest news from cryptocurrency industry.
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        There you can choose the language in which news will be displayed and filter them by categories (you can choose multiple categories)
                    </Typography>
                </div>
            </React.Fragment>
        )
    }
}