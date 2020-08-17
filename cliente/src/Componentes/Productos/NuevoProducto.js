import React, { Fragment, Component } from 'react';
import FormularioNuevoProducto from './FormularioNuevoProducto';

class NuevoProducto extends Component {

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
                                                <h3>Registrar producto</h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="x_content">
                                        <FormularioNuevoProducto />
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

export default NuevoProducto;