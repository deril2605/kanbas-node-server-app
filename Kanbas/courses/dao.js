import model from "./model.js";

export const findCourseById = (_id) => model.findOne({ _id: _id });
export const findAllCourses = () => model.find();
export const updateCourse = (_id, course) => {
    return model.updateOne({ _id: _id }, { $set: course });
};
export const deleteCourse = (_id) => model.deleteOne({ _id: _id });
export const createCourse = (course) => {
    // delete course._id;
    return model.create(course);
};