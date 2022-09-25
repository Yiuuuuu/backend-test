import mongoose from "mongoose";

// Promotion detail's schema
const PromoSchema = mongoose.Schema({
  id: String,
  name: String,
  description: String,
  promotionCategoryId: String,
  imageUrlList: [String]
});

const Promo = mongoose.model('Promo', PromoSchema);

export default Promo;