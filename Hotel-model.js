import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviews: [{ type: String }],
    website: { type: String },
    phoneNumber: { type: String, required: true },
    checkInTime: { type: String },
    checkOutTime: { type: String },
    amenities: [{ type: String }],
    priceRange: {
      type: String,
      enum: ["$ (0-10)", "$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationsNeeded: { type: Boolean, required: true, default: false },
    isParkingAvailable: { type: Boolean, default: false },
    isWifiAvailable: { type: Boolean, default: false },
    isPoolAvailable: { type: Boolean, default: false },
    isSpaAvailable: { type: Boolean, default: false },
    isRestaurantAvailable: { type: Boolean, default: false },
    photos: [{ type: String }],
  },
  { timestamps: true }
);

const HotelModel = mongoose.model("Hotel", HotelSchema);
export { HotelModel };