import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Menu from './Componentes/Layout/Menu';
import Navegador from './Componentes/Layout/Navegador';
import Footer from './Componentes/Layout/Footer';
import Dashboard from './Componentes/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContenidoProductos from './Componentes/Productos/ContenidoProductos';
import ContenidoUsuarios from './Componentes/Usuarios/ContenidoUsuarios';
import ContenidoCategorias from './Componentes/Categorias/ContenidoCategorias';
import ContenidoMarcas from './Componentes/Marcas/ContenidoMarcas';
import NuevoProducto from './Componentes/Productos/NuevoProducto';
import Login from './Componentes/Auth/Login';
import Registro from './Componentes/Auth/Registro';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphqlError }) => {
    console.log('graphqlErrors', graphqlError);
    console.log('networkError', networkError);
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <div class="container body">
              <div class="main_container">
                <Menu />
                <Navegador />
                <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/Productos/ContenidoProductos" component={ContenidoProductos}/>
                  <Route exact path="/Productos/ContenidoUsuarios" component={ContenidoUsuarios}/>
                  <Route exact path="/Productos/NuevoProducto" component={NuevoProducto}/>
                  <Route exact path="/Categorias/ContenidoCategorias" component={ContenidoCategorias}/>

                  <Route exact path="/Marcas/ContenidoMarcas" component={ContenidoMarcas}/>

                  <Route exact path="/Auth/Login" component={Login}/>
                  <Route exact path="/Auth/Registro" component={Registro}/>
                </Switch>
                <Footer />
              </div>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider >
    );
  }
}

export default App;
