import mongoose from "mongoose";

// Promotion Category's schema
const PromoCatSchema = mongoose.Schema({
  id: String,
  name: String,
  parentPromotionCategoryId: String,
  subCategoryCount: Number,
});

const PromoCat = mongoose.model('PromoCat', PromoCatSchema);

export default PromoCat;