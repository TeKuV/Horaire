import React, { Component, Fragment } from "react";
import Row from "../Row";
import image from "../../imgs/default.png";
import "jquery";
import "datatables.net";
import "datatables.net-dt";
import "../../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export default class Employees extends Component {
  handleSearchClick = (e) => {};

  componentDidMount() {
    this.el = $(this.el);
    this.el.DataTable({
      data: [
        [
          <img
            src={image}
            alt="default"
            width={40}
            className="rounded-circle"
          />,
          "1",
          "1",
          "1",
          "1",
          "1",
        ],
        ["1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1"],
        ["1", "1", "1", "1", "1", "1"],
      ],
      columns: [
        { title: "Employee" },
        { title: "Contact Details" },
        { title: "Last Activity" },
        { title: "Location" },
        { title: "Action" },
      ],
      bDestroy: true,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="">
            <button className="btn btn-primary float-right">
              <i className="fa-solid fa-user-plus"></i>&nbsp;
            </button>
          </div>
        </div>
        <hr className="py-2" />
        <table
          className="table table-responsive table-hover col-sm-12"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}
