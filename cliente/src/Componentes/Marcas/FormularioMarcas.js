import React, { Fragment, Component } from 'react';

class FormularioMarcas extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>


                <div className="col-md-6 col-sm-6 ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Form Design <small>different form elements</small></h2>
                            <ul className="nav navbar-right panel_toolbox">
                                <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-wrench" /></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a className="dropdown-item" href="#">Settings 1</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Settings 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a className="close-link"><i className="fa fa-close" /></a>
                                </li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="x_content">
                            <br />
                            <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">First Name <span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input type="text" id="first-name" required="required" className="form-control " />
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Last Name <span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input type="text" id="last-name" name="last-name" required="required" className="form-control" />
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Middle Name / Initial</label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input id="middle-name" className="form-control" type="text" name="middle-name" />
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align">Gender</label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <div id="gender" className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-secondary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                <input type="radio" name="gender" defaultValue="male" className="join-btn" /> &nbsp; Male &nbsp;
                                                                </label>
                                            <label className="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                <input type="radio" name="gender" defaultValue="female" className="join-btn" /> Female
                                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input id="birthday" className="date-picker form-control" placeholder="dd-mm-yyyy" type="text" required="required" onfocus="this.type='date'" onmouseover="this.type='date'" onclick="this.type='date'" onblur="this.type='text'" onmouseout="timeFunctionLong(this)" />
                                    </div>
                                </div>
                                <div className="ln_solid" />
                                <div className="item form-group">
                                    <div className="col-md-6 col-sm-6 offset-md-3">
                                        <button className="btn btn-primary" type="button">Cancel</button>
                                        <button className="btn btn-primary" type="reset">Reset</button>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FormularioMarcas;