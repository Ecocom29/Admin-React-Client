import mongoose from 'mongoose';
import bCrypt from 'bcrypt';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/adminNegocios', { useNewUrlParser: true });

//mongoose.set('setFindAndModify', false);
//Define el schema de usuarios
const EmpresaSchema = new mongoose.Schema({
    empresa: String,
    jefe: String,
    nombres: String,
    apellidos: String,
    correo: String,
    edad: Number,
    tipo: String,
    password: String,
    sucursales: Array,
    giro: String,
    fechaAlta: String,
    esActivo: Number
});

//Encriptar password antes de guardar
EmpresaSchema.pre('save', function (next) {
    //Si el password no esta modificador
    if (!this.isModified('password')) {
        return next();
    }

    bCrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bCrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);

            this.password = hash;
            next();
        });
    });
});

const Empresa = mongoose.model('empresa', EmpresaSchema);

//Define el schema de sucursales
const SucursalesSchema = new mongoose.Schema({
    nombre: String,
    encargado: String,
    cp: Number,
    calle: String,
    cruzamientos: String,
    numero: String,
    colonia: String,
    ubicacion: String,
    fechaAlta: Date,
    esActivo: Number
});
const Sucursal = mongoose.model('sucursales', SucursalesSchema)

//Define el schema de productos
const productosSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    descripcion: String,
    categoria: String,
    fechaAlta: Date,
    esActivo: Number
});
const Producto = mongoose.model('producto', productosSchema);

//Define el schema de categorias
const CategoriaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    fechaAlta: Date,
    esActivo: Number
});
const Categoria = mongoose.model('categoria', CategoriaSchema);

//Define el schema de marcas
const MarcaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    fechaAlta: Date,
    esActivo: Number
});
const Marca = mongoose.model('marca', MarcaSchema);

export { Empresa, Sucursal, Producto, Categoria, Marca };