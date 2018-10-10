const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/relatedItems.js");

router.get("/:id", ctrl.fetch);
router.post("/", ctrl.createItem);
router.delete("/:id", ctrl.destroyItem);
router.put("/:id", ctrl.updateItem);


module.exports = router;
