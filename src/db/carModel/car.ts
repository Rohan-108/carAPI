import { Schema, model } from "mongoose";

interface carType {
  car_name: string;
  date_of_sale: Date;
  model_no: string;
  price: Number;
}
const carSchema = new Schema(
  {
    car_name: { type: String, required: true },
    date_of_sale: { type: Date, required: true },
    model_no: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const carModel = model<carType>("Car", carSchema);

//server actions on user model

export const getAllCars = () => carModel.find();
export const deleteCar = (id: string) => carModel.findOneAndDelete({ _id: id });
