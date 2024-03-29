const Mongoose = require('mongoose');

const productSchema = new Mongoose.Schema({
  producto: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  // Otros campos relevantes para tu aplicación
});



const Product = Mongoose.model('Product', productSchema);

productSchema.methods.getProducts = async function (username) {
    const result = await Mongoose.model("product").find();
    console.log(result);
    return result;
  };

productSchema.methods.getProduct = async function (id) {
  const result = await Mongoose.model("product").findById(id);
  console.log(result);
  return result;
};

productSchema.methods.createProduct = async function (name, price, cantidad) {
  const product = new Product({ name, price, description });
  await product.save();
  return product;
}

productSchema.methods.uptadeProduct = async function (id, name, price, cantidad) {
  const product= await Product.findByIdAndUpdate(id);
  product.name = name;
  product.price = price;
  product.cantidad = cantidad;
  await product.save();
  return product;
}

productSchema.methods.deleteProduct = async function (id) {
  const product = await Product.findById(id);
  await product.remove();
  return product;
}

  

  module.exports = Mongoose.model("product", productSchema);
