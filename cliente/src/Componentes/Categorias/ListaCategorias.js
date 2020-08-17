import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';

import { OBTENER_CATEGORIAS } from '../../queries';

class ListaCategorias extends Component {

    
    render() {
        return (
            <Fragment>
                <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Catálogo de marcas <small>Tabla de marcas registradas</small></h2>
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
                            
                            <Query query={OBTENER_CATEGORIAS} pollInterval={1000} variables={{ limite: this.limite }}>
                                {({ loading, error, data, startPolling, stopPolling }) => {

                                    if (loading) return (
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Cargando...</span>
                                        </div>);

                                    if (error) return (
                                        <div className="alert alert-warning" role="alert">
                                            {error.message}
                                        </div>);

                                    return (
                                        <Fragment>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Nombre</th>
                                                        <th>Descripción</th>
                                                        <th>Fecha Alta</th>
                                                        <th>Estado</th>
                                                        <th>Accion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.obtenerCategorias.map(item => {
                                                            const { id } = item;
                                                            let lEstado = '';
                                                            const fecha = new Date(Number(item.fechaAlta));

                                                            if (item.esActivo == 1)
                                                                lEstado = 'Activo';
                                                            else
                                                                lEstado = 'Inactivo';

                                                            return (
                                                                <tr key={id}>
                                                                    <th scope="row">{item.nombre}</th>
                                                                    <td>{item.descripcion}</td>
                                                                    <td>{fecha.toLocaleString("es-MX")}</td>
                                                                    <td>{lEstado}</td>
                                                                    <td>
                                                                        <button type="button" class="btn btn-info btn-sm">Editar</button>
                                                                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </Fragment>
                                    )
                                }}
                            </Query>

                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ListaCategorias;