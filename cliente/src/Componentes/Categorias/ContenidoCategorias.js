import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCategorias from './ListaCategorias';
import FormularioCategorias from './FormularioCategorias';

class ContenidoCategorias extends Component {

    render() {
        return (
            <Fragment>
                {/* page content */}
                <div className="right_col" role="main" style={{ minHeight: 954 }}>
                    <div className="">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <div className="x_panel">
                                    <div className="x_title">

                                        <div className="page-title">
                                            <div className="title_left">
                                                <h3>Registrar Categorias</h3>
                                            </div>
                                            <div className="title_right">
                                                <div className="col-md-5 col-sm-5  form-group pull-right top_search">
                                                    <div className="input-group">
                                                        <Link to="/productos/NuevoProducto" className="btn btn-primary"  ><i className="fa fa-plus-circle" /> Nuevo </Link>
                                                        {/*<button className="btn btn-primary" type="reset">
                                                    <i className="fa fa-plus-circle"> </i>
                                                        Nuevo
                                                    </button>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="x_content">

                                    <FormularioCategorias/>
                                    <ListaCategorias/>
                                    
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* /page content */}

            </Fragment >
        );
    }
}

export default ContenidoCategorias;