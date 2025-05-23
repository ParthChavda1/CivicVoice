"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getEnumValues_1 = require("../utils/getEnumValues");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const router = (0, express_1.Router)();
router.get('/all', (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = (0, getEnumValues_1.getComplaintCategoryLabels)();
    res.json(categories);
    if (!categories)
        throw new asyncHandler_1.CustomError("No categories found", 404);
})));
exports.default = router;
//# sourceMappingURL=categoryRoutes.js.map