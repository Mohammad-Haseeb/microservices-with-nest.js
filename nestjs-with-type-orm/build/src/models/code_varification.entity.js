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
exports.code_varification = void 0;
var typeorm_1 = require("typeorm");
var ExpiredEnum;
(function (ExpiredEnum) {
    ExpiredEnum[ExpiredEnum["unchecked"] = 0] = "unchecked";
    ExpiredEnum[ExpiredEnum["checked"] = 1] = "checked";
})(ExpiredEnum || (ExpiredEnum = {}));
var code_varification = /** @class */ (function () {
    function code_varification() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], code_varification.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], code_varification.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], code_varification.prototype, "purpose", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], code_varification.prototype, "is_expired", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], code_varification.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], code_varification.prototype, "expires_at", void 0);
    code_varification = __decorate([
        (0, typeorm_1.Entity)()
    ], code_varification);
    return code_varification;
}());
exports.code_varification = code_varification;
//# sourceMappingURL=code_varification.entity.js.map