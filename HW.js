import { HotelModel } from "./Hotel-model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
app.use(express.json());
//db connection
const connectIntoTheDB = async () => {
  console.log("establising bd connection...");
  try {
    await mongoose.connect(process.env.ConnectionURL);
    console.log("connection establised!");
  } catch (error) {
    console.log(error);
  }
};
connectIntoTheDB();

// 1
const allHotelList = async () => {
  const hotels = await HotelModel.find({});
  return hotels;
};
app.get("/hotels", async (req, res) => {


  try {
      const allHotels = await allHotelList();
    if (allHotels.length != 0) {
      res.status(200).json(allHotels);
    } else {
      res.status(404).json({ error: "Hotels Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "an error oquired" });
  }
});

//2
const ShowHotelByName = async (HotelName) => {
  try {
    const hotelInfo = await HotelModel.findOne({ name: HotelName });
    return hotelInfo;
  } catch (error) {
    throw error;
  }
};
app.get("/hotels/:hotelName", async (req, res) => {
  const name = req.params.hotelName;
  const result = await ShowHotelByName(name);
  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Hotels Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "an error oquired" });
  }
});
//3
const ShowHotelByPhoneNum = async (Phone_number) => {
  const hotelInfo = await HotelModel.findOne({ phoneNumber: Phone_number });
  return hotelInfo;
};

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  const hotelInfo = req.params.phoneNumber;
  const result = await ShowHotelByPhoneNum(hotelInfo);
  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Hotels Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "an error oquired" });
  }
});
//4
const ShowHotelByRating = async (rating) => {
  const hotelInfo = await HotelModel.findOne({ rating: rating });
  return hotelInfo;
};

app.get("/hotels/rating/:hotelRating", async (req, res) => {
  const hotelInfo = req.params.hotelRating;
  const result = await ShowHotelByRating(hotelInfo);
  try {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Hotels Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "an error oquired" });
  }
});
//5
const ShowHotelByCategory = async (category) => {
  const hotelInfo = await HotelModel.find({ category: category });
  return hotelInfo;
};

app.get("/hotels/category/:hotelCategory", async (req, res) => {
  const hotelInfo = req.params.hotelCategory;
  const result = await ShowHotelByCategory(hotelInfo);
  try {
    if (result.length != 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Hotels Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "an error oquired" });
  }
});

app.listen(2000, () => console.log("Server Started on port 2000"));
