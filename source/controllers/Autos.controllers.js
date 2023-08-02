const Autos = require("../model/Autos")

// Obtener todos los autos
const getAllAutos = async (req, res) => {
  try {
    const autos = await Autos.find();
    res.status(200).json({
      mensaje: "Lista de autos",
      autos,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo auto
const createAuto = async (req, res) => {
  try {
    const nuevoAuto = new Autos(req.body);
    const autoGuardado = await nuevoAuto.save();
    res.status(201).json(autoGuardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un auto por su ID
const getAutoById = async (req, res) => {
  try {
    const auto = await Autos.findById(req.params.id);
    if (!auto) {
      return res.status(404).json({ mensaje: "Auto no encontrado" });
    }
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un auto por su ID
const updateAutoById = async (req, res) => {
  try {
    const autoActualizado = await Autos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!autoActualizado) {
      return res.status(404).json({ mensaje: "Auto no encontrado" });
    }
    res.json(autoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un auto por su ID
const deleteAutoById = async (req, res) => {
  try {
    const autoEliminado = await Autos.findByIdAndDelete(req.params.id);
    if (!autoEliminado) {
      return res.status(404).json({ mensaje: "Auto no encontrado" });
    }
    res.json({ mensaje: "Auto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAutos,
  createAuto,
  getAutoById,
  updateAutoById,
  deleteAutoById,
};