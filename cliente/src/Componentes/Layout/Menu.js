import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-3 left_col">
                    <div className="left_col scroll-view">
                        <div className="navbar nav_title" style={{ border: 0 }}>
                            <a href="index.html" className="site_title"><i className="fa fa-paw" /> <span>Gentelella Alela!</span></a>
                        </div>
                        <div className="clearfix" />
                        {/* menu profile quick info */}
                        <div className="profile clearfix">
                            <div className="profile_pic">
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className="img-circle profile_img" />
                            </div>
                            <div className="profile_info">
                                <span>Welcome,</span>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                        {/* /menu profile quick info */}
                        <br />
                        {/* sidebar menu */}
                        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                            <div className="menu_section">
                                <h3>Menu principal</h3>
                                <ul className="nav side-menu">
                                    <li><Link to="/Productos/ContenidoProductos" ><i className="fa fa-inbox" />  Ver productos <span className="fa fa-minus" /></Link></li>
                                    <li><Link to="/productos/ContenidoUsuarios" ><i className="fa fa-inbox" />  Ver usuarios <span className="fa fa-minus" /></Link></li>
                                    <li><Link to="/Categorias/ContenidoCategorias" ><i className="fa fa-inbox" />  Ver Categorias <span className="fa fa-minus" /></Link></li>
                                    <li><Link to="/Marcas/ContenidoMarcas" ><i className="fa fa-inbox" />  Ver Marcas <span className="fa fa-minus" /></Link></li>
                                                                           
                                </ul>
                            </div>
                        </div>
                        {/* /sidebar menu */}
                        </div>
                </div>

              
            </Fragment>
        )
    }
}

export default Menu;