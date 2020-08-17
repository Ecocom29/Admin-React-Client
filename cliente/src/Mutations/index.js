import gql from 'graphql-tag';

export const CREAR_PRODUCTO = gql`
    mutation crearProducto($input: ProductoInput){
        crearProducto(input: $input){
            id
            nombre
            precio
            stock
            marca
            descripcion
            categoria
        }
    }
`;

export const CREAR_EMPRESA = gql`
    mutation crearEmpresa($input: EmpresaInput){
        crearEmpresa(input: $input){
            id
            empresa
            jefe
            nombres
            apellidos
            correo      
            edad
            tipo
            password
            sucursales
            giro
            fechaAlta
            esActivo
        }
    }
`;

export const ACTUALIZAR_EMPRESA = gql`
    mutation actualizarEmpresa($input : EmpresaInput ){
        actualizarEmpresa(input: $input){
            id
            empresa
            jefe
            nombre
            apellidos
            correo      
            edad
            tipo
            password
            sucursales
            giro
            fechaAlta
            esActivo
        }
    }
`;

export const CREAR_CATEGORIA = gql`
    mutation crearCategoria($input : CategoriaInput ){
        crearCategoria(input: $input){
            id
            nombre
            descripcion
            fechaAlta
            esActivo
        }
    }
`;

export const CREAR_MARCA = gql`
    mutation crearMarca($input : MarcasInput ){
        crearMarca(input: $input){
            id
            nombre
            descripcion
            fechaAlta
            esActivo
        }
    }
`;