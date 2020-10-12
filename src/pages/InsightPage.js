import React, { Component } from "react";
import insightService from "../services/insightService";
import InsightDetails from "../components/InsightDetails";
import { Spinner } from "react-bootstrap";

export default class InsightPage extends Component {
  state = {
    insight: null,
  };

  componentDidMount() {
    this.loadInsight();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadInsight();
    }
  }

  loadInsight() {
    const { id } = this.props.match.params;
    insightService.getInsightById(id).then((insight) => {
      this.setState({ insight });
    });
  }

  goBack = () => {
    this.props.history.push("/insights");
  };

  render() {
    if (!this.state.insight) return <Spinner></Spinner>;
    return <InsightDetails insight={this.state.insight} goBack={this.goBack} />;
  }
}
