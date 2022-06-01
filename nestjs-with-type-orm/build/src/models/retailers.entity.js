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
exports.retailers = void 0;
var typeorm_1 = require("typeorm");
var retailers = /** @class */ (function () {
    function retailers() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], retailers.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], retailers.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], retailers.prototype, "deleted_at", void 0);
    retailers = __decorate([
        (0, typeorm_1.Entity)()
    ], retailers);
    return retailers;
}());
exports.retailers = retailers;
//# sourceMappingURL=retailers.entity.js.map