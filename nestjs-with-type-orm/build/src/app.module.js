"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_entity_1 = require("./models/user.entity");
var user_properties_entity_1 = require("./models/user_properties.entity");
var user_roles_entity_1 = require("./models/user_roles.entity");
var code_varification_entity_1 = require("./models/code_varification.entity");
var onboarding_entity_1 = require("./models/onboarding.entity");
var onboarding_properties_entity_1 = require("./models/onboarding_properties.entity");
var onboarding_documents_entity_1 = require("./models/onboarding_documents.entity");
var delivery_settings_entity_1 = require("./models/delivery_settings.entity");
var delivery_window_entity_1 = require("./models/delivery_window.entity");
var preferences_entity_1 = require("./models/preferences.entity");
var listings_entity_1 = require("./models/listings.entity");
var listing_settings_entity_1 = require("./models/listing_settings.entity");
var sold_listings_entity_1 = require("./models/sold_listings.entity");
var listing_scheduler_data_entity_1 = require("./models/listing_scheduler_data.entity");
var configuration_entity_1 = require("./models/configuration.entity");
var my_notifications_entity_1 = require("./models/my_notifications.entity");
var categories_entity_1 = require("./models/categories.entity");
var sub_categories_entity_1 = require("./models/sub_categories.entity");
var retailers_entity_1 = require("./models/retailers.entity");
var proference_filters_entity_1 = require("./models/proference_filters.entity");
var address_book_entity_1 = require("./models/address_book.entity");
// import { config } from '../ormconf
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'ayaan',
                    password: 'postgres',
                    database: 'everstocked',
                    synchronize: true,
                    entities: [
                        user_entity_1.Users,
                        user_properties_entity_1.user_properties,
                        user_roles_entity_1.user_roles,
                        code_varification_entity_1.code_varification,
                        onboarding_entity_1.onboarding,
                        onboarding_properties_entity_1.onboarding_properties,
                        onboarding_documents_entity_1.onboarding_documents,
                        delivery_settings_entity_1.delivery_settings,
                        delivery_window_entity_1.delivery_window,
                        preferences_entity_1.preferences,
                        listings_entity_1.listings,
                        listing_settings_entity_1.listing_setting,
                        sold_listings_entity_1.sold_listings,
                        listing_scheduler_data_entity_1.listing_schedular_data,
                        configuration_entity_1.configurations,
                        my_notifications_entity_1.my_notifications,
                        categories_entity_1.categories,
                        sub_categories_entity_1.sub_categories,
                        retailers_entity_1.retailers,
                        proference_filters_entity_1.proference_filters,
                        address_book_entity_1.address_book,
                    ],
                    migrations: ['dist/src/db/migrations/*.ts'],
                    subscribers: ['src/subscriber/**/*.ts'],
                    cli: {
                        // entitiesDir: 'src/entity',..
                        migrationsDir: 'src/db/migrations/',
                        // subscribersDir: 'src/subscriber',
                    },
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map