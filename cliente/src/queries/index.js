
import gql from 'graphql-tag';

export const EMPRESA_QUERY = gql`{
    obtenerEmpresa{
      id
      nombres
      apellidos
      correo   
      edad
      usuario
      empresas
      tipo
      fechaAlta
      esActivo
    }
}`;

export const PRODUCTOS_QUERY = gql`{
    obtenerProductos{
        id
        nombre
        precio
        stock
        marca
        descripcion
        categoria
        fechaAlta
        esActivo
    }
}`;




export const OBTENER_CATEGORIAS = gql`
  query obtenerCategorias($limite: Int){
    obtenerCategorias(limite: $limite){
            id
            nombre
            descripcion
            fechaAlta
            esActivo
        }
    } 
`;

//Obtener productos para el paginado
export const OBTENER_CATEGORIAS_ACTIVOS = gql`    
    query obtenerCategoriaActivos($esActivo: Int){
        obtenerCategoriaActivos( esActivo: $esActivo){
            id
            nombre
        }
    }   
`;


export const OBTENER_MARCAS = gql`
    query obtenerMarcas($limite: Int){
        obtenerMarcas(limite: $limite){
            id
            nombre
            descripcion
            fechaAlta
            esActivo
        }
    }  
 `;

 //Obtener productos para el paginado
export const OBTENER_MARCAS_ACTIVOS = gql`    
    query obtenerMarcasActivos($esActivo: Int){
        obtenerMarcasActivos( esActivo: $esActivo){
            id
            nombre
        }
    }   
`;
