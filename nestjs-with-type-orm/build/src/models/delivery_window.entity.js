"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delivery_window = void 0;
var typeorm_1 = require("typeorm");
var delivery_window = /** @class */ (function () {
    function delivery_window() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], delivery_window.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], delivery_window.prototype, "day", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], delivery_window.prototype, "slots", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], delivery_window.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], delivery_window.prototype, "updated_at", void 0);
    delivery_window = __decorate([
        (0, typeorm_1.Entity)()
    ], delivery_window);
    return delivery_window;
}());
exports.delivery_window = delivery_window;
//# sourceMappingURL=delivery_window.entity.js.map