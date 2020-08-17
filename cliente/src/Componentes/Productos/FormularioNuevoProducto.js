import React, { Fragment, Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CREAR_PRODUCTO } from '../../Mutations';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import { OBTENER_CATEGORIAS_ACTIVOS, OBTENER_MARCAS_ACTIVOS } from '../../queries';

const initialState = {
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    descripcion: '',
    categoria: ''
}


class FormularioNuevoProducto extends Component {

    state = {
        ...initialState
    }

    lActivo = 1;

    limpiarState = () => {
        this.setState({
            ...initialState
        })
    }

    handleFormReset = () => {
        this.setState(() => this.initialState)
    }

    //LLenar los datos del formulario
    actualizarState = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    //Validar para activar el boton guardar
    validarForm = () => {
        const { nombre, precio, stock, marca, categoria, descripcion } = this.state;
        const noValido = !nombre || !precio || !stock || !marca || !categoria || !descripcion;

        return noValido;
    }

    crearNuevoProducto = (e, crearProducto) => {
        e.preventDefault();

        //Insertamos en la base de datos
        crearProducto().then(data => {
          //  this.limpiarState();

           this.handleFormReset();
            //Direccionar
            return <Redirect to='/Productos' />
        })
    }

    render() {

        const { nombre, precio, stock, marca, descripcion, categoria } = this.state;
        const input = {
            nombre,
            precio: Number(precio),
            stock: Number(stock),
            marca,
            descripcion,
            categoria
        }

        return (

            <Fragment>
                <Mutation
                    mutation={CREAR_PRODUCTO}
                    variables={{ input }}


                >
                    {(crearProducto, { loading, error, data }) => {
                        return (

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

                                        <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left" noValidate
                                            onSubmit={e => this.crearNuevoProducto(e, crearProducto)}
                                        >
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">Nombre del producto: <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 ">
                                                    <input
                                                        type="text"
                                                        name="nombre"
                                                        required="required"
                                                        className="form-control "
                                                        onChange={this.actualizarState}
                                                    />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Precio: <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 ">
                                                    <input
                                                        type="number"
                                                        name="precio"
                                                        required="required"
                                                        className="form-control"
                                                        onChange={this.actualizarState}
                                                    />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Existencia</label>
                                                <div className="col-md-6 col-sm-6 ">
                                                    <input name="stock" className="form-control" type="number" onChange={this.actualizarState} />
                                                </div>
                                            </div>

                                            <div className="item form-group">
                                                <label class="col-form-label col-md-3 col-sm-3  label-align">Categoria:<span class="required">*</span></label>
                                                <div className="col-md-6 col-sm-6 ">
                                                    <Query query={OBTENER_CATEGORIAS_ACTIVOS} variables={{ esActivo: this.lActivo }}>
                                                        {({ loading, error, data }) => {

                                                            //console.log(data.obtenerCategoriaActivos);
                                                            if (loading) return "Cargando...";
                                                            if (error) return `Error: ${error.message}`;


                                                            return (
                                                                <Fragment>
                                                                    <select className="form-control" name="categoria" onChange={this.actualizarState}>
                                                                        <option value="">Seleccionar categoria</option>
                                                                        {
                                                                            data.obtenerCategoriaActivos.map(item => {
                                                                                return (
                                                                                    <option key={item.id} value={item.id}>{item.nombre}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </Fragment>
                                                            )
                                                        }}

                                                    </Query>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label class="col-form-label col-md-3 col-sm-3  label-align">Marca:<span class="required">*</span></label>
                                                <div className="col-md-6 col-sm-6 ">
                                                    <Query query={OBTENER_MARCAS_ACTIVOS} variables={{ esActivo: this.lActivo }}>
                                                        {({ loading, error, data }) => {

                                                            //console.log(data.obtenerCategoriaActivos);
                                                            if (loading) return "Cargando...";
                                                            if (error) return `Error: ${error.message}`;


                                                            return (
                                                                <Fragment>
                                                                    <select className="form-control" name="marca" onChange={this.actualizarState}>
                                                                        <option value="">Seleccionar marca</option>
                                                                        {
                                                                            data.obtenerMarcasActivos.map(item => {
                                                                                return (
                                                                                    <option key={item.id} value={item.id}>{item.nombre}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </Fragment>
                                                            )
                                                        }}

                                                    </Query>
                                                </div>
                                            </div>

                                            <div class="field item form-group">
                                                <label class="col-form-label col-md-3 col-sm-3  label-align">Descripción:<span class="required">*</span></label>
                                                <div class="col-md-6 col-sm-6">
                                                    <textarea
                                                        required="required"
                                                        class="form-control"
                                                        name="descripcion"
                                                        data-parsley-trigger="keyup"
                                                        data-parsley-minlength="20"
                                                        data-parsley-maxlength="100"
                                                        data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                                        data-parsley-validation-threshold="10"
                                                        onChange={this.actualizarState}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="ln_solid" />
                                            <div className="item form-group">
                                                <div className="col-md-6 col-sm-6 offset-md-3">
                                                    <Link to="/productos/ContenidoProductos" className="btn btn-danger"  ><i className="fa fa-reply-all" /> Cancelar </Link>
                                                    <button className="btn btn-primary" type="reset" onChange={this.limpiarState}>Reiniciar</button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success"
                                                        disabled={this.validarForm()}
                                                    >Guardar
                                        </button>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                </div>
                            </div>
                        )

                    }}


                </Mutation>

            </Fragment>

        );
    }
}

export default withRouter(FormularioNuevoProducto);