const Product = require("../Schema/ProductSchema");
const Kanban = require("../Schema/KanbanSchema");
const Consumer = require("../Schema/ConsumerSchema");

exports.add = async (req, res, next) => {
  const { Name, Status, Image, consumers, Location, totalAmount } = req.body;

  const product = new Product({
    Name,
    Status,
    Image,
    consumers,
    Location,
    totalAmount,
  });

  

  try {
    const newProduct = await product.save();
    const kanban = new Kanban();


    const newKanban = await kanban.save();

    newProduct.kanban = newKanban._id;
    
    const productSaved = await newProduct.save();

    const consumer = await Consumer.findById(consumers)

    consumer.products.push(productSaved._id)
    console.log(consumer);

    consumer.save()
    res.json(productSaved)

  } catch (error) {
    next(error);
  }
};

exports.show = (req, res, next) => {
  Product.find({})
    .populate("Kanban")
    .populate("consumer")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

exports.showById = (req, res, next) => {
  const id = req.params.id;

  Product.findById(id)
    .populate("Kanban")
    .populate("consumer")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};
