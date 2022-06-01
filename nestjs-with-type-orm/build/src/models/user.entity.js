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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var user_roles_entity_1 = require("./user_roles.entity");
var termsEnum;
(function (termsEnum) {
    termsEnum[termsEnum["unchecked"] = 0] = "unchecked";
    termsEnum[termsEnum["checked"] = 1] = "checked";
})(termsEnum || (termsEnum = {}));
var activeEnum;
(function (activeEnum) {
    activeEnum[activeEnum["inactive"] = 0] = "inactive";
    activeEnum[activeEnum["active"] = 1] = "active";
})(activeEnum || (activeEnum = {}));
var approvedEnum;
(function (approvedEnum) {
    approvedEnum[approvedEnum["notapproved"] = 0] = "notapproved";
    approvedEnum[approvedEnum["approved"] = 1] = "approved";
})(approvedEnum || (approvedEnum = {}));
var Users = /** @class */ (function () {
    function Users() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "first_name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "token", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Users.prototype, "terms", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Users.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Users.prototype, "approved", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "registered_via", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return user_roles_entity_1.user_roles; }, {
            createForeignKeyConstraints: false,
        }),
        __metadata("design:type", user_roles_entity_1.user_roles)
    ], Users.prototype, "role_id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], Users.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], Users.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp with time zone' }),
        __metadata("design:type", Date)
    ], Users.prototype, "deleted_at", void 0);
    Users = __decorate([
        (0, typeorm_1.Entity)()
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=user.entity.js.map