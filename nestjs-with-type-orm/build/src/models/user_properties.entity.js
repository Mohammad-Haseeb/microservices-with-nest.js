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
exports.user_properties = void 0;
var typeorm_1 = require("typeorm");
var user_properties = /** @class */ (function () {
    function user_properties() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], user_properties.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], user_properties.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], user_properties.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], user_properties.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], user_properties.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], user_properties.prototype, "delete_at", void 0);
    user_properties = __decorate([
        (0, typeorm_1.Entity)()
    ], user_properties);
    return user_properties;
}());
exports.user_properties = user_properties;
//# sourceMappingURL=user_properties.entity.js.map