import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class InsightPreview extends Component {
  state = {
    content: "",
    isInEditMode: false,
  };

  constructor() {
    super();
    this.textareaRef = React.createRef();
  }

  toggleEditMode = (ev) => {
    let toggleMode = !this.state.isInEditMode;
    this.setState({ isInEditMode: toggleMode });
    ev.preventDefault();
  };

  handleTextareaClick = (ev) => {
    ev.preventDefault();
  };

  onSave = (id, ev) => {
    const text = this.textareaRef.current;
    this.props.onSave(id, text.value).catch();
    this.toggleEditMode(ev);
    window.location.reload();
  };

  render() {
    const { insight } = this.props;
    return (
      <React.Fragment>
        <div className="insight-preview">
          <Link to={`/insights/${insight.id}`}>
            <div className="insight-id">
              <div className="insight-id-text">{insight.id}</div>
            </div>
            <div className="insight-content-container">
              <div className="insight-content-and-dropdown">
                {this.state.isInEditMode ? (
                  <div className="insight-content-textarea-wrapper">
                    <textarea
                      defaultValue={insight.content}
                      onClick={this.handleTextareaClick}
                      ref={this.textareaRef}
                    ></textarea>
                    <div className="btns-wrapper">
                      <button
                        className="insight-btn"
                        onClick={this.toggleEditMode}
                      >
                        ביטול
                      </button>
                      <button
                        className="insight-btn save-btn"
                        onClick={(e) => this.onSave(insight.id, e)}
                      >
                        שמירה
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="insight-content">{insight.content}</p>
                )}
                <div className="dropdown">
                  <button
                    className="three-dots-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    •••
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        this.props.onDelete(this.props.insight);
                      }}
                    >
                      מחיקה
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={this.toggleEditMode}
                    >
                      עריכה
                    </div>
                  </div>
                </div>
              </div>
              <small>
                {insight.contributorsCount} משתתפים תומכים בטענה זו (
                {insight.contributorsPercent}% מהתשובות)
              </small>
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
