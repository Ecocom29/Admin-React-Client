import mongoose from 'mongoose';
import { Empresa, Sucursal, Producto, Marca, Categoria} from './db';

const empresaDB = {};

//Se crea para el resolver para los querys y mutations
export const resolvers = {
    Query: {
        obtenerEmpresas: (root, {limite}) => {
            return Empresa.find({}).limit(limite);
        },

        obtenerProductos: (root, {limite}) => {
            return Producto.find({}).limit(limite);
        },
        getEmpresa: ({ id }) => {
            return new Empresa(id, empresaDB[id]);
        },
        obtenerCategorias: (root, {limite}) => {
            return Categoria.find({}).limit(limite);
        },
        obtenerCategoriaActivos: (root, {esActivo}) => {
            return Categoria.find({esActivo});
        },
        obtenerMarcas: (root, {limite}) => {
          
            return Marca.find({}).limit(limite);
        },
        obtenerMarcasActivos: (root, {esActivo}) => {
            return Marca.find({esActivo});
        }
    },
    Mutation: {
        //Crea nueva empresa
        crearEmpresa: async (root, { empresa,jefe,nombres,apellidos,correo,edad,tipo,password,giro}) => {
            //Revisar si existe una empresa con el nombre asignado
            const existeEmpresa = await Empresa.findOne({ empresa });

            //Validando existencia de la empresa
            if (existeEmpresa) {
                throw new Error('La empresa ya existe, elija otro nombre.');
            }

            //Creando el objeto usuario para insertarlo a la bd
            const nuevaEmpresa = await new Empresa({
                empresa,
                jefe,
                nombres,
                apellidos,
                correo,
                edad,
                tipo,
                password,
                giro,
                fechaAlta: new Date(),
                esActivo: 1
            }).save();

            return "Empresa creado correctamente.";
        },
       /* crearEmpresa: (root, { input }) => {

            const nuevaEmpresa = new Empresa({
                empresa: input.empresa,
                jefe: input.jefe,
                nombres: input.nombres,
                apellidos: input.apellidos,
                empresas: input.empresas,
                correo: input.correo,
                edad: input.edad,
                tipo: input.tipo,
                password: input.password,
                sucursales: input.sucursales,
                giro: input.giro,
                fechaAlta: new Date(),
                esActivo: 1
            });

            nuevaEmpresa.id = nuevaEmpresa._id;

            return new Promise((resolvers, object) => {
                nuevaEmpresa.save((error) => {
                    if (error) rejects(error);
                    else resolvers(nuevaEmpresa);
                });
            });
        },*/
        actualizarEmpresa: (root, { input }) => {
            return new Promise((resolve, object) => {
                Empresa.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, empresa) => {
                    if (error) rejects(error)
                    else resolve(empresa)
                });
            });
        },

        eliminarEmpresa: (root, { id }) => {
            return new Promise((resolve, object) => {
                Empresa.findOneAndRemove({ _id: id }, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        },

        //Crear producto
        crearProducto: (root, { input }) => {

            const creaProducto = new Producto({
                nombre: input.nombre,
                precio: input.precio,
                stock: input.stock,
                marca: input.marca,
                descripcion: input.descripcion,
                categoria: input.categoria,
                fechaAlta: new Date(),
                esActivo: 1
            });
          
            //MongoDB crea el ID y se lo asigna al objeto
            creaProducto.id = creaProducto._id;
        
            return new Promise((resolve, object) => {
                creaProducto.save((error) => {
                    if (error) rejects(error);
                    else
                        resolve(creaProducto);
                })
            })
        },
        actualizarProducto: (root, { input }) => {
            return new Promise((resolve, object) => {
                Producto.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, producto) => {
                    if (error) rejects(error)
                    else resolve(producto)
                });
            });
        },
        eliminarProducto: (root, { id }) => {
            return new Promise((resolve, object) => {
                Producto.findOneAndRemove({ _id: id }, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        },
        crearCategoria: (root, { input }) => {
            console.log(input);

            const creaCategoria = new Categoria({
                nombre: input.nombre,
                descripcion: input.descripcion,
                fechaAlta: new Date(),
                esActivo: 1
            });
           
            //MongoDB crea el ID y se lo asigna al objeto
            creaCategoria.id = creaCategoria._id;
        
            return new Promise((resolve, object) => {
                creaCategoria.save((error) => {
                    if (error) rejects(error);
                    else
                        resolve(creaCategoria);
                })
            })
        },

        crearMarca: (root, { input }) => {

            const creaMarca = new Marca({
                nombre: input.nombre,
                descripcion: input.descripcion,
                fechaAlta: new Date(),
                esActivo: 1
            });
          
            //MongoDB crea el ID y se lo asigna al objeto
            creaMarca.id = creaMarca._id;
        
            return new Promise((resolve, object) => {
                creaMarca.save((error) => {
                    if (error) rejects(error);
                    else
                        resolve(creaMarca);
                })
            })
        }

    }
}

export default resolvers;