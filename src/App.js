import React, { Component, Fragment } from "react";
import Container from "./components/Container";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="row">
            <div className="col-12">
              <div className="p-3">
                <i className="fa fa-users"></i>&nbsp; AGRI-NOUSS & PARTNERS
              </div>
            </div>
          </div>
          <div></div>
        </header>
        <main>
          <Container />
        </main>
      </Fragment>
    );
  }
}
