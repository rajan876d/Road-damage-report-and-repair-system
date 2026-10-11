// services/road.services.js
import Road from "../models/road.js";
import Ward from "../models/ward.js";

const createRoad = async (data) => {
  const ward = await Ward.findById(data.ward);
  if (!ward) throw new Error("Ward not found");
  try {
    return await Road.create(data);
  } catch (e) {
    if (e.code === 11000) throw new Error("Road already exists in this ward");
    throw e;
  }
};

const getRoads = async (wardId) => {
  const filter = wardId ? { ward: wardId } : {};
  return Road.find(filter).populate("ward", "name number").sort({ name: 1 });
};

const updateRoad = async (id, data) => {
  if (data.ward) {
    const ward = await Ward.findById(data.ward);
    if (!ward) throw new Error("Ward not found");
  }
  try {
    const road = await Road.findByIdAndUpdate(id, data, { new: true });
    if (!road) throw new Error("Road not found");
    return road;
  } catch (e) {
    if (e.code === 11000) throw new Error("Road already exists in this ward");
    throw e;
  }
};

const deleteRoad = async (id) => {
  const road = await Road.findByIdAndDelete(id);
  if (!road) throw new Error("Road not found");
};

export default { createRoad, getRoads, updateRoad, deleteRoad };