import React, { Fragment, Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

const initialState = {
    nombre: '',
    descripcion: '',
    fechaAlta: '',
    esActivo: 0
}


class FormularioCategorias extends Component {

    state = {
        ...initialState
    }

    limpiarState = () => {
        this.setState({
            ...initialState
        })
    }

    actualizarState = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })

    }

    crearNuevaCategoria = (e, nuevaCategoria) => {
        e.preventDefault();

        nuevaCategoria().then(data => {
            this.limpiarState();

            return  <Redirect to='/Productos/ContenidoProductos'  />
        });
    }

    render() {
        return (

            <Fragment>

                <div className="col-md-6 col-sm-6 ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Formulario de registro <small>Registra nuevas categorias</small></h2>
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
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">Nombre <span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input type="text" 
                                            name="nombre" 
                                            required="required" 
                                            className="form-control "
                                            onChange={this.actualizarState}
                                         />
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Descripción<span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input type="text" 
                                        name="descripcion" 
                                        required="required" 
                                        className="form-control" 
                                        onChange={this.actualizarState}
                                        />
                                    </div>
                                </div>
                                <div className="item form-group">
                                    <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Fecha alta</label>
                                    <div className="col-md-6 col-sm-6 ">
                                        <input  className="form-control" type="text" name="fechaAlta" onChange={this.actualizarState}/>
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

export default withRouter(FormularioCategorias);