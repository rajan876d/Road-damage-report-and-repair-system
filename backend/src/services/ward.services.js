// services/wardService.js
import Ward from "../models/ward.js";
import Road from "../models/road.js";


const createWard = async (data) => {
  try {
    return await Ward.create(data);
  } catch (e) {
    if (e.code === 11000) {
      throw {
        message: "Ward already exists",
      };
    }
    throw e;
  }
};

const getWards = async () => {
  return Ward.find().sort({ number: 1 });
};

const updateWard = async (id, data) => {
  const ward = await Ward.findByIdAndUpdate(id, data, { new: true });
  if (!ward) {
    throw {
      message: "Ward not found",
    };
  }
  return ward;
};

const deleteWard = async (id) => {
  const used = await Road.exists({ ward: id });
  if (used) {
    throw {
      message: "Delete this ward's roads first",
    };
  }
  const ward = await Ward.findByIdAndDelete(id);
  if (!ward) {
    throw {
      message: "Ward not found",
    };
  }
};

export default { createWard, getWards, updateWard, deleteWard };
