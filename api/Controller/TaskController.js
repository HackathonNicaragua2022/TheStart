const Task = require("../Schema/TaskSchema");
const Kanban = require("../Schema/KanbanSchema");
const Working = require("../Schema/WorkingSchema");

exports.add = async (req, res, next) => {
  const { Title, Status, Text, workings } = req.body;

  const task = new Task({
    Title,
    Status,
    Text,
    workings,
  });

  try {
    console.log("1");
    console.log(task);
    const TaskSaved = await task.save();
    console.log("2");
    const newWorking = await Working.findById(workings);

    const kanban = await Kanban.findById(newWorking.kanbans);

    kanban.tasks.push(TaskSaved._id);

    kanban.save();

    newWorking.tasks.push(TaskSaved._id);

    newWorking.save();

    res.json(TaskSaved);
  } catch (error) {
    next(error);
  }
};

exports.show = (req, res, next) => {
  Task.find({})
    .populate("Kanban")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

exports.showById = (req, res, next) => {
  const id = req.params.id;

  Task.findById(id)
    .populate("Kanban")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};
