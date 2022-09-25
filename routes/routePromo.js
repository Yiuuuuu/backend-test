import express from "express";

import {
  getPromoCat,
  getPromoDetail,
  addPromoCat,
  addPromoDetail,
} from "../controllers/promo.js";

const router = express.Router();

// APIs for promo
router.get("/cat", getPromoCat);
router.get("/detail/:id", getPromoDetail);
router.post("/cat", addPromoCat);
router.post("/detail", addPromoDetail);

export default router;
