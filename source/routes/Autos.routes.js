const express = require("express");
const router = express.Router();
const autoscontrollers = require("../controllers/Autos.controllers");

router.post("/", autoscontrollers.createAuto);
router.get("/", autoscontrollers.getAllAutos);
router.get("/:id", autoscontrollers.getAutoById);
router.put("/:id", autoscontrollers.updateAutoById);
router.delete("/:id", autoscontrollers.deleteAutoById);

module.exports = router;