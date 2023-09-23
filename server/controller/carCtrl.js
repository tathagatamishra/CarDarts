const carModel = require("../model/carModel");

exports.create = async (req, res) => {
  try {
    const data = req.body;

    let exData = await carModel.findOne({
      $or: [{ reg: data.reg }, { name: data.name }],
    });

    if (exData) {
      return res.status(200).send({
        status: false,
        message: "Registration no. / Dealer name already exist !",
      });
    }

    let createdData = await carModel.create(data);
    return res.status(201).send({
      status: true,
      message: "Car created successfully 😃",
      data: createdData,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

exports.read = async (req, res) => {
  try {
    const cars = await carModel.find();

    return res.status(200).send({
      status: true,
      data: cars,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
