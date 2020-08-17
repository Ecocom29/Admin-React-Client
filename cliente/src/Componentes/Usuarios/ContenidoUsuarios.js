import React,{Component, Fragment} from 'react';
import ListaUsuarios from './ListaUsuarios';

class ContenidoUsuarios extends Component {

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
                                                <h3>Lista de usuarios</h3>
                                            </div>
                                            <div className="title_right">
                                                <div className="col-md-5 col-sm-5  form-group pull-right top_search">
                                                    <div className="input-group">
                                                        <button className="btn btn-primary" type="reset">
                                                        <i className="fa fa-plus-circle"> </i>
                                                            Nuevo
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="x_content">
                                      <ListaUsuarios/>
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
 
export default ContenidoUsuarios;