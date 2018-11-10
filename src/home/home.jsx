import React from 'react';
import { Typography } from "@material-ui/core";
import {loadPrices, loadGraphData} from "../data/action-creators";
import {connect} from "react-redux";
import {store} from "../data/store";
import LineChart from '../utils/linechart';
import ToolTip from '../utils/tooltip';
import InfoBox from '../utils/infobox';
import "./home.css";

var NumberFormat = require('react-number-format');

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hoverLoc: null,
            activePoint: null
        }
    }

    handleChartHover(hoverLoc, activePoint){
        this.setState({
          hoverLoc: hoverLoc,
          activePoint: activePoint
        })
    }

    componentWillMount(){
        this.props.loadPrices();
        this.props.loadGraphData();
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <Typography variant="h6" gutterBottom>
                        This is home page of the Crypto-Tracker!
                    </Typography>
                    <br/>
                </div>
                <div className="crypto-prices">
                    <div className="title-prices">
                        <Typography variant="subtitle1" gutterBottom>
                            Pricing of 5 most popular cryptocurrences for now
                        </Typography>
                    </div>
                    {this.props.priceIsLoading && <div>Loading...</div>}
                    {this.props.priceLoadFailed && <div>Loading failed :(</div>}
                    {Object.keys(this.props.prices).map((key) => (
                        <div id="crypto-container">
                            <span className="currency">{key}</span>
                            <span className="prices">
                                <div className="usd-price">
                                    <NumberFormat value={this.props.prices[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/>
                                </div>
                                <div className="eur-price">
                                    <NumberFormat value={this.props.prices[key].EUR} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'€'}/>
                                </div>
                                <div className="rub-price">
                                    <NumberFormat value={this.props.prices[key].RUB} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'₽'}/>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
                <div className='graph-container'>
                    <div className = 'graph-title'>
                            <Typography component="h2" variant="headline" gutterBottom>30 Day Bitcoin Price Chart</Typography>
                    </div>
                    {this.props.graphDataIsLoading && <div>Graph is loading...</div>}
                    {this.props.graphLoadFailed && <div>Loading failed :(</div>}
                    <div className='graph'>
                        <div className='row'>
                            { !this.props.graphDataIsLoading ?
                            <InfoBox data={this.props.graphData} />
                            : null }
                        </div>
                        <div className='row'>
                            <div className='popup'>
                                {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='chart'>
                            { (!this.props.graphDataIsLoading && this.props.graphData.length > 0) ?
                                <LineChart data={this.props.graphData} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                                : null }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    prices: state.app.prices,
    graphData: state.app.graphData,
    priceIsLoading: state.priceIsLoading,
    priceLoadFailed: state.priceLoadFailed,
    graphDataIsLoading : state.graphDataIsLoading,
    graphLoadFailed : state.graphLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
    loadPrices: () => dispatch(loadPrices()),
    loadGraphData: () => dispatch(loadGraphData())
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;