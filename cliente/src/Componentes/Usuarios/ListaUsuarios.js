import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import { EMPRESA_QUERY } from '../../queries';

class ListaUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Query query={EMPRESA_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return "Cargando";
                    if (error) return `Error: ${error.message}`;

                    return (
                        <Fragment>
                            <ul>
                                {
                                    data.obtenerUsuarios.map(item => (

                                        <div className="col-md-3   widget widget_tally_box">
                                            <div className="x_panel fixed_height_390">
                                                <div className="x_content">
                                                    <div className="flex">
                                                        <ul className="list-inline widget_profile_box">
                                                            <li>
                                                                <p></p>
                                                            </li>
                                                            <li>
                                                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="..." className="img-circle profile_img" />
                                                            </li>
                                                            <li>
                                                                <p></p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="name">{item.nombre} {item.apellidos}</h4>
                                                    
                                                    <div className="flex">
                                                        <ul className="list-inline count1">
                                                            <li>
                                                                <label><strong>Usuario: </strong></label>
                                                                <span> {item.usuario} </span>
                                                            </li>
                                                            <li>
                                                                <label><strong>Tipo: </strong></label>
                                                                <span> {item.tipo} </span>
                                                            </li>
                                                            <li>
                                                            <label><strong>Edad: </strong></label>
                                                                <span> {item.edad} </span>
                                                            </li>
                                                            <li>
                                                                <label><strong>Correo: </strong></label>
                                                                <span> {item.correo} </span>
                                                            </li>
                                                            <li>
                                                                <label><strong>Empresa: </strong></label>
                                                                <span> {item.empresas} </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex">
                                                        <ul className="list-inline count2">
                                                            <li>
                                                                <button className="btn btn-success btn-sm" type="button">
                                                               
                                                                    Editar
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className="btn btn-danger btn-sm" type="button">
                                                               
                                                                    Eliminar
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className="btn btn-info btn-sm" type="button">
                                                               
                                                                    Detalles
                                                                </button>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    ))}
                            </ul>
                        </Fragment>
                    )

                }}

            </Query>
        );
    }
}

export default ListaUsuarios;