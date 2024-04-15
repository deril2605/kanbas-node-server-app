import model from "./model.js";

export const findModulesByCourseId = (cid) => model.find({ course: cid });
export const updateModule = (mid, module) => {
    return model.updateOne({ _id: mid }, { $set: module });
}
export const deleteModule = (_id) => model.deleteOne({ _id: _id });
export const createModule = (module) => {
    return model.create(module);
}