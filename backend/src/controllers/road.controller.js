// controllers/road.controller.js
import roadService from "../services/road.services.js";

const createRoad = async (req, res) => {
  try {
    res.status(201).json(await roadService.createRoad(req.body));
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getRoads = async (req, res) => {
  try {
    res.json(await roadService.getRoads(req.query.ward));
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const updateRoad = async (req, res) => {
  try {
    res.json(await roadService.updateRoad(req.params.id, req.body));
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const deleteRoad = async (req, res) => {
  try {
    await roadService.deleteRoad(req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export default { createRoad, getRoads, updateRoad, deleteRoad };