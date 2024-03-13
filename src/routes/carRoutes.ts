import express from "express";
import { createCar, getCars, getLatestCar } from "../controller/carController";

const router = express.Router();

router.route("/").post(createCar);
router.route("/").get(getCars);
router.route("/latest").get(getLatestCar);

export default router;
