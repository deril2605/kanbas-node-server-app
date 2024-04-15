import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses/:id", async (req, res) => {
        try {
            const course = await dao.findCourseById(req.params.id);
            if (!course) {
                res.status(404).send("Could not find the Course");
                return;
            }
            res.send(course);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    app.delete("/api/courses/:id", async (req, res) => {
        try {
            const status = await dao.deleteCourse(req.params.id);
            res.json(status);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.put("/api/courses/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const course = req.body;
            const status = await dao.updateCourse(id, course);
            res.sendStatus(204);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    app.post("/api/courses", async (req, res) => {
        try {
            console.log(req.body);
            const course = await dao.createCourse(req.body);
            res.send(course);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    app.get("/api/courses", async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.send(courses);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });
}
