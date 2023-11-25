"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const t = __importStar(require("typeorm"));
const product_entity_1 = require("./product.entity");
const customer_entity_1 = require("./customer.entity");
// import { OrderProducts } from "./orderProducts.entity";
let Order = class Order {
};
exports.Order = Order;
__decorate([
    t.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    t.Column({ default: true, nullable: true }),
    __metadata("design:type", Boolean)
], Order.prototype, "active", void 0);
__decorate([
    t.ManyToMany(() => product_entity_1.Product, (product) => product.orders),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    t.ManyToOne(() => customer_entity_1.Customer, (customer) => customer.orders),
    __metadata("design:type", customer_entity_1.Customer)
], Order.prototype, "customer", void 0);
__decorate([
    t.CreateDateColumn(),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
__decorate([
    t.UpdateDateColumn(),
    __metadata("design:type", Date)
], Order.prototype, "updated_at", void 0);
exports.Order = Order = __decorate([
    t.Entity("orders")
], Order);
