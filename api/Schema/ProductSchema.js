const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  Image: String,
  status: String,
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  kanban:{
    type: Schema.Types.ObjectId,
    ref: "Kanban",
  },
  totalAmount: Number,
  Location: String,
});

ProductSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
