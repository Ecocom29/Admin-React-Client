import React, { Component, Fragment } from 'react';

class Dashboard extends Component {

    render() {
        return (

            <Fragment>
                {/* page content */}
                <div className="right_col" role="main" style={{ minHeight: 954 }}>
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Página de inicio</h3>
                            </div>
                            <div className="title_right">
                                <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12  ">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Plain Page</h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li><a className="close-link"><i className="fa fa-close" /></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        Add content to the page ...
          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /page content */}

            </Fragment>

        );
    }
}

export default Dashboard;