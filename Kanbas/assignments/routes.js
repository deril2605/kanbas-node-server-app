import db from "../Database/index.js";
function AssignmentRoutes(app) {
    // app.put("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     const moduleIndex = db.modules.findIndex(
    //         (m) => m._id === mid);
    //     db.modules[moduleIndex] = {
    //         ...db.modules[moduleIndex],
    //         ...req.body
    //     };
    //     res.sendStatus(204);
    // });

    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignments);
    });
}
export default AssignmentRoutes;