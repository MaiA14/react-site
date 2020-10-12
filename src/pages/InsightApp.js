import React, { Component } from "react";
import insightService from "../services/insightService";
import InsightList from "../components/InsightList";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import InsightsSummery from "../components/InsightsSummery";
import "../App.css";

export default class InsightsApp extends Component {
  state = {
    insights: [],
  };

  componentDidMount() {
    this.loadInsights();
  }

  loadInsights = () => {
    insightService.getInsights().then((insights) => {
      this.setState({ insights });
    });
  };

  onDelete = (insight) => {
    insightService.deleteInsight(insight).then(() => {
      this.props.history.push("/insights");
    });
  };

  onEditInsight = (id, content) =>{
    return insightService.editInsight(id, content).then(() =>{
      this.props.history.push("/insights");
    })
}

  render() {
    return (
      <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <div className="insights-list-container">
          <InsightsSummery></InsightsSummery>
          <InsightList
            insights={this.state.insights}
            onDelete={this.onDelete} onSave={this.onEditInsight} 
          ></InsightList>
        </div>
      </div>
    );
  }
}
