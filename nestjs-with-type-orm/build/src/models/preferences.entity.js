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
exports.preferences = void 0;
var typeorm_1 = require("typeorm");
var isDeletedEnum;
(function (isDeletedEnum) {
    isDeletedEnum[isDeletedEnum["false"] = 0] = "false";
    isDeletedEnum[isDeletedEnum["true"] = 1] = "true";
})(isDeletedEnum || (isDeletedEnum = {}));
var preferences = /** @class */ (function () {
    function preferences() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], preferences.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], preferences.prototype, "is_deleted", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], preferences.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], preferences.prototype, "updated_at", void 0);
    preferences = __decorate([
        (0, typeorm_1.Entity)()
    ], preferences);
    return preferences;
}());
exports.preferences = preferences;
//# sourceMappingURL=preferences.entity.js.map