const Kanban = require("../Schema/KanbanSchema");

exports.show = (req, res, next) => {
  Kanban.find({})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

exports.showById = (req, res, next) => {
  const id = req.params.id;

  Kanban.findById(id)
    .populate("tasks")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};
