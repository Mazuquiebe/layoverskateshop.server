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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSellerService = void 0;
const bcrypt_1 = require("bcrypt");
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const class_transformer_1 = require("class-transformer");
const registerSellerService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerRepo = data_source_1.default.getRepository(entities_1.Seller);
    const { password } = data;
    data.password = yield (0, bcrypt_1.hash)(password, 10);
    const seller = sellerRepo.create(data);
    yield sellerRepo.save(seller);
    return (0, class_transformer_1.instanceToPlain)(seller);
});
exports.registerSellerService = registerSellerService;
