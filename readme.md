
# 4 APIs provided
  - [GET] /promo/cat
  - [GET] /promo/detail/{id}
  - [POST] /promo/cat
    - request body
      {
        "name": String,
        "parentPromotionCategoryId": String,
      }
  - [POST] /promo/detail
    - request body
      {
        "name": String,
        "description": String,
        "promotionCategoryId": String,
        "imageUrlList": String[]
      }

# Database
  - MongoDB used
  - schema is stored under `/model/*`

# Docker file provided