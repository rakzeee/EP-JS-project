import React from "react";
import Button from "@material-ui/core/Button/Button";
import {loadNews, loadCategories} from "../data/action-creators";
import {connect} from "react-redux";
import Language from './language'
import {Link} from "react-router-dom";
import {store} from "../data/store";
import "./news.css";
import Select from 'react-select';
import { Typography } from "@material-ui/core";

class News extends React.Component {
    constructor(props){
        super(props)
    }

    state = { 
        selectedOption : [],
        options : [],
    }

    isClicked = false;

    checkForNews = () => {
        this.props.loadNews(this.state.selectedOption);
        if (this.props.categories == null || this.props.categories.length === 0){   
            this.props.loadCategories();
        }
        this.isClicked = true;
    };

    handleChange = (selectedOption) => {
        this.setState({
            selectedOption
        });
        console.log(`Options selected:`, selectedOption);
    }

    render() {
        let newsList;
        let isNewsEmpty = (this.props.news.length === 0) ? true : false;
        let isCategEmpty = (this.props.categories.length === 0) ? true : false;
        if (this.isClicked && !isNewsEmpty) {
            newsList = this.props.news.map((doc) => (
                <article className="card">
                    <Link to={"/news/" + doc.id}>
                        <figure className="thumbnail">
                            <img className="news-img" key={doc.imageurl} src={doc.imageurl} alt="news"/>
                        </figure>
                        <div className="card-content" key={doc.title}>
                            <p>{doc.title}</p>
                        </div>
                    </Link>
                </article>
            ));
            if (!isCategEmpty){
                this.state.options = this.props.categories.map(categ => ({ label: categ.categoryName, 
                                                                    value: categ.categoryName }));
            }
        }else if (!this.props.newsIsLoading && this.isClicked && isNewsEmpty){
            debugger;
            newsList = <Typography component="h4" variant="display1" gutterBottom>
                            There is no news in portuguese yet!
                        </Typography>;
        }
        const { selectedOption, options } = this.state;

        return(
            <React.Fragment>
                <div className="lang-news">
                    <div className="lang-news-in">
                        <Typography variant="subheading" gutterBottom>
                            Please, select the language:
                        </Typography>
                        <Language/>
                        <br/>
                        <Button onClick={this.checkForNews} variant="contained" color="secondary">
                            Load news
                        </Button>
                    </div>
                </div>
                {this.isClicked && !isNewsEmpty &&
                    <div className="categ-news">
                        <div className="categ-news-in">
                            <Typography variant="subheading" gutterBottom>
                                You can sort news by category:
                            </Typography>
                            {this.props.categoriesIsLoading && <div>Loading...</div>}
                            {this.props.categoriesIsFailed && <div>Loading failed :(</div>}
                            <Select
                                value = {selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                isMulti={true}
                            />
                        </div>
                    </div>
                }
                {this.isClicked && !isNewsEmpty &&
                    <div className="news-title">
                        <Typography component="h3" variant="display1" gutterBottom>
                            50 latest news
                        </Typography>
                    </div>
                }
                {this.props.newsIsLoading && <div>Loading...</div>}
                {this.props.newsIsFailed && <div>Loading failed :(</div>}
            
                <main class="main-area">
                    <div class="centered">
                        <section className="cards">
                            {newsList}
                        </section>
                    </div>
                </main>
            </React.Fragment>
        )
    };
}

const mapStateToProps = (state) => ({
    selectedArticle: state.article,
    news: state.app.news,
    categories: state.app.categories,
    newsIsLoading: state.newsIsLoading,
    newsIsFailed: state.newsLoadFailed,
    categoriesIsLoading: state.categoriesIsLoading,
    categoriesIsFailed: state.categoriesIsFailed
});

const mapDispatchToProps = (dispatch) => ({
    loadNews: (categories) => dispatch(loadNews(categories)),
    loadCategories: () => dispatch(loadCategories())  
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;