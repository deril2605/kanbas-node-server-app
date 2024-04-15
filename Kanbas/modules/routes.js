import * as dao from "./dao.js";

function ModuleRoutes(app) {
    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        console.log(req.body);
        try {
            const status = await dao.updateModule(mid, req.body);
            res.sendStatus(204);
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    });

    app.delete("/api/modules/:mid", async (req, res) => {
        try {
            const status = await dao.deleteModule(req.params.mid);
            res.json(status);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        try {
            const module_op = await dao.createModule(newModule);
            res.send(module_op);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        try {
            const modules = await dao.findModulesByCourseId(cid);
            res.send(modules);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });
}

export default ModuleRoutes;
