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
exports.listing_setting = void 0;
var typeorm_1 = require("typeorm");
var listing_setting = /** @class */ (function () {
    function listing_setting() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], listing_setting.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], listing_setting.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'bigint' }),
        __metadata("design:type", String)
    ], listing_setting.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], listing_setting.prototype, "created_at", void 0);
    listing_setting = __decorate([
        (0, typeorm_1.Entity)()
    ], listing_setting);
    return listing_setting;
}());
exports.listing_setting = listing_setting;
//# sourceMappingURL=listing_settings.entity.js.map