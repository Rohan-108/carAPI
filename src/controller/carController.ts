import { Request, Response } from "express";
import { carModel as Car, getAllCars } from "../db/carModel/car";

//@desc Get all cars
// @route GET /api/v1/car
// access PUBLIC

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await getAllCars();
    res.status(200).json({ results: cars });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//@desc Create a Car
// @route POST /api/v1/car
// access PUBLIC

export const createCar = async (req: Request, res: Response) => {
  try {
    const { car_name, date_of_sale, price, model_no } = req.body;
    if (!car_name || !date_of_sale || !price || !model_no) {
      return res.status(400).json("data is missing");
    }
    const newCar = await Car.create({
      car_name,
      date_of_sale,
      model_no,
      price,
    });
    await newCar.save();
    res.status(201).json({ result: newCar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//@desc Get a latest car
// @route GET /api/v1/car/latest
// access PUBLIC

export const getLatestCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.find().sort({ date_of_sale: -1 }).limit(1);
    res.status(201).json({ result: car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
