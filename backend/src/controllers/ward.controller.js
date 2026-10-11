// controllers/wardController.js
import wardService from "../services/ward.services.js";


 const createWard = async (req, res) => {
  try{
    const ward = await wardService.createWard(req.body);
     res.status(201).json(ward);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 const getWards = async (req, res) => {
  try{
    res.json(await wardService.getWards());
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 const updateWard = async (req, res) => {
  try{
    res.json(await wardService.updateWard(req.params.id, req.body));
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 const deleteWard = async (req, res) => {
  try{
    await wardService.deleteWard(req.params.id);
    res.json({ message: "Deleted" });
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createWard, getWards, updateWard, deleteWard };