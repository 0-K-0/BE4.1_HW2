import { HotelModel } from "./Hotel-model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const HotelsData = [
  {
    name: "Lake View",
    category: "Mid-Range",
    location: "124 Main Street, Anytown",
    rating: 3.2,
    reviews: [],
    website: "https://lake-view-example.com",
    phoneNumber: "+1234555890",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    amenities: ["Laundry", "Boating"],
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isParkingAvailable: false,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: [
      "https://example.com/hotel1-photo1.jpg",
      "https://example.com/hotel1-photo2.jpg",
    ],
  },
  {
    name: "Sunset Resort",
    category: "Resort",
    location: "12 Main Road, Anytown",
    rating: 4.2,
    reviews: [],
    website: "https://sunset-example.com",
    phoneNumber: "+1997687392",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    amenities: [
      "Room Service",
      "Horse riding",
      "Boating",
      "Kids Play Area",
      "Bar",
    ],
    priceRange: "$$$$ (61+)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: true,
    isSpaAvailable: true,
    isRestaurantAvailable: true,
    photos: [
      "https://example.com/hotel2-photo1.jpg",
      "https://example.com/hotel2-photo2.jpg",
    ],
  },
];

//insert data
const Seed_Data = async () => {
  try {
    mongoose.connect(process.env.ConnectionURL);
    await HotelModel.deleteMany({});
    const insertData = await HotelModel.insertMany(HotelsData);
    console.log("Data Successfully reinserted!");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnect from the server!");
  }
};

Seed_Data();
