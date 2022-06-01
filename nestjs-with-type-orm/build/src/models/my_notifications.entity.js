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
exports.my_notifications = void 0;
var typeorm_1 = require("typeorm");
var isRead;
(function (isRead) {
    isRead[isRead["no"] = 0] = "no";
    isRead[isRead["yes"] = 1] = "yes";
})(isRead || (isRead = {}));
var my_notifications = /** @class */ (function () {
    function my_notifications() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], my_notifications.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], my_notifications.prototype, "is_read", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], my_notifications.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], my_notifications.prototype, "deleted_at", void 0);
    my_notifications = __decorate([
        (0, typeorm_1.Entity)()
    ], my_notifications);
    return my_notifications;
}());
exports.my_notifications = my_notifications;
//# sourceMappingURL=my_notifications.entity.js.map