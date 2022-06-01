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
exports.delivery_settings = void 0;
var typeorm_1 = require("typeorm");
var delivery_settings = /** @class */ (function () {
    function delivery_settings() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], delivery_settings.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], delivery_settings.prototype, "file_type", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], delivery_settings.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], delivery_settings.prototype, "updated_at", void 0);
    delivery_settings = __decorate([
        (0, typeorm_1.Entity)()
    ], delivery_settings);
    return delivery_settings;
}());
exports.delivery_settings = delivery_settings;
//# sourceMappingURL=deliver_settings.entity.js.map