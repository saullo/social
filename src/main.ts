import express from "express";
import http from "http";
import userController from "./controllers/user";

const router = express();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post("/users", userController.create);

const server = http.createServer(router);
server.listen(3000, () => console.log("Server is running on port 3000"));
