import React, { Component, Fragment } from "react";
import "../../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../../node_modules/datatables.net-dt/js/dataTables.dataTables.min";
import Row from "../Row";
import image from "../../imgs/default.png";

export default class Employees extends Component {
  handleSearchClick = (e) => {};

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="row mx-md-n5 py-4">
            <div className="col px-md-5">
              <div className="input-group">
                <input type="text" className="form-control rounded-start" />
                <button
                  className="rounded-end input-group-text"
                  onClick={this.handleSearchClick}
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col px-md-5">
              <div className="float-right">
                <button className="btn btn-primray">
                  <i className="fa-solid fa-user-plus"></i>&nbsp;
                </button>
              </div>
            </div>
          </div>
          <hr className="py-1" />
          <table
            className="table table-responsive table-hover col-sm-12"
            ref="main"
          >
            <thead className="bg-light text-center">
              <td className="py-2">Employee</td>
              <td className="py-2">Contact Details</td>
              <td className="py-2">Employee Fields</td>
              <td className="py-2">Last Activity</td>
              <td className="py-2">Loction</td>
              <td className="py-2">Action</td>
            </thead>
            <tbody>
              <Row path={image} name={"hacker"} state={0} />
              <Row path={image} name={"hacker"} state={1} />
              <Row path={image} name={"hacker"} state={0} />
              <Row path={image} name={"hacker"} state={1} />
              <Row path={image} name={"hacker"} state={0} />
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
