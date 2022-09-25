import Promo from "../models/Promo.js";
import PromoCat from "../models/PromoCat.js";

// Get Promotion Category List
export const getPromoCat = async (request, response) => {
  try {
    let result = await PromoCat.find({}).select("-_id -__v");
    response.status(200).json(result);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

// Get Promotion Detail
export const getPromoDetail = async (request, response) => {
  try {
    let result = await Promo.findOne({ id: request.params.id }).select("-_id -__v");
    if (result == null) {
      throw new Error("Not found");
    }
    response.status(200).json(result);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

// Add Promotion Category 
export const addPromoCat = async (request, response) => {
  try {
    const promoCatId = await PromoCat.count();
    const parentId = request.body.parentPromotionCategoryId;

    // 1a. check parent cat. exist?
    // 1b. if so, update its subCat. count
    if (parentId != null) {
      let parentCat = await PromoCat.findOne({ id: parentId });
      if (parentCat) {
        await PromoCat.findByIdAndUpdate(parentCat._id, {
          ...parentCat,
          subCategoryCount: parentCat.subCategoryCount++,
        });
      } else {
        throw new Error("Parent Catogery does not exist!");
      }
    }

    // 2. add a new promo cat.
    let result = await PromoCat({
      id: promoCatId,
      name: request.body.name,
      parentPromotionCategoryId: parentId,
      subCategoryCount: 0,
    }).save();
    response.status(200).json(result);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};


// Add Promotion Detail
export const addPromoDetail = async (request, response) => {
  try {
    const promoId = await Promo.count();
    const parentId = request.body.promotionCategoryId;

    // 1. check parent cat. exist?
    let parentCat = await PromoCat.findOne({ id: parentId });
    if (!parentCat) {
      throw new Error("Parent Catogery does not exist!");
    }

    // 2. add a new promo
    let result = await Promo({
      id: promoId,
      name: request.body.name,
      description: request.body.description,
      promotionCategoryId: parentId,
      imageUrlList: request.body.imageUrlList,
    }).save();
    response.status(200).json(result);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};
