import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';

import { PRODUCTOS_QUERY } from '../../queries';


class ListaProductos extends Component {

    render() {
        return (
            <Fragment>
                <div className="col-md-6 col-sm-6  ">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Catálogo de Productos <small>Tabla de productos registrados</small></h2>
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



                            <Query query={PRODUCTOS_QUERY} pollInterval={1000}>
                                {({ loading, error, data, startPolling, stopPolling  }) => {
                                    if (loading) return "Cargando";
                                    if (error) return `Error: ${error.message}`;

                                    return (
                                        <Fragment>
                                            <div className="table-responsive">
                                                <table className="table table-striped jambo_table bulk_action">
                                                    <thead >
                                                        <tr >
                                                            <th>Nombre</th>
                                                            <th>Precio</th>
                                                            <th>Existencias</th>
                                                            <th>Estado</th>
                                                            <th>Accion</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            data.obtenerProductos.map(item => {
                                                                const { id } = item;
                                                                let lEstado = '';

                                                                if (item.esActivo == 1)
                                                                    lEstado = 'Activo';
                                                                else
                                                                    lEstado = 'Inactivo';

                                                                return (
                                                                    <tr key={id}>
                                                                        <th scope="row">{item.nombre}</th>
                                                                        <td>{item.precio}</td>
                                                                        <td>{item.stock}</td>
                                                                        <td>{lEstado}</td>
                                                                        <td>
                                                                            <button type="button" class="btn btn-success btn-sm">Detalles</button>
                                                                            <button type="button" class="btn btn-info btn-sm">Editar</button>
                                                                            <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Fragment>
                                    )
                                }}
                            </Query>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ListaProductos;