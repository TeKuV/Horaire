import React, { Component } from 'react'
import "../App.css";
import Employees from './onglets/Employees';

export default class Container extends Component {
  state = {
    activeTab: 0,
  };

  

  handleEmployeeClick = () => this.setState({ activeTab: 0 });

  handleTimelineClick = () => this.setState({ activeTab: 1 });

  handleArchiveClick = () => this.setState({ activeTab: 2 });
  render() {
    let DisplayTab = null;
    switch (this.state.activeTab) {
      case 0:
        DisplayTab = <Employees />;
        break;

      case 1:
        DisplayTab = <div>njuv</div>;
        break;

      case 2:
        DisplayTab = <div>Archive</div>;
        break;

      default:
        break;
    }
    return (
      <div className="container borderbg-gradient rounded">
        <div className="mx-auto card my-1 shadow-sm">
          <div></div>
          <div className="card-body bg-light">
            <div className="col-sm-4 col-4">
              <div className="row">
                <div
                  onClick={this.handleEmployeeClick}
                  className="col-4 text-center py-2 rounded-top"
                  style={{
                    background: this.state.activeTab === 0 ? "white" : null,
                    cursor: "pointer",
                  }}
                >
                  Employee
                </div>
                <div
                  onClick={this.handleTimelineClick}
                  className="col-4 text-center py-2 rounded-top"
                  style={{
                    background: this.state.activeTab === 1 ? "white" : null,
                    cursor: "pointer",
                  }}
                >
                  Timeline
                </div>
                <div
                  onClick={this.handleArchiveClick}
                  className="col-4 text-center py-2 rounded-top"
                  style={{
                    background: this.state.activeTab === 2 ? "white" : null,
                    cursor: "pointer",
                  }}
                >
                  Archive
                </div>
              </div>
            </div>
            <div className="row bg-white py-3">
              <div className="col-12">{DisplayTab}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
