import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './models/user.entity';
import { user_properties } from './models/user_properties.entity';
import { user_roles } from './models/user_roles.entity';
import { code_varification } from './models/code_varification.entity';
import { onboarding } from './models/onboarding.entity';
import { onboarding_properties } from './models/onboarding_properties.entity';
import { onboarding_documents } from './models/onboarding_documents.entity';
import { delivery_settings } from './models/delivery_settings.entity';
import { delivery_window } from './models/delivery_window.entity';
import { preferences } from './models/preferences.entity';
import { listings } from './models/listings.entity';
import { listing_setting } from './models/listing_settings.entity';
import { sold_listings } from './models/sold_listings.entity';
import { listing_schedular_data } from './models/listing_scheduler_data.entity';
import { configurations } from './models/configuration.entity';
import { my_notifications } from './models/my_notifications.entity';
import { categories } from './models/categories.entity';
import { sub_categories } from './models/sub_categories.entity';
import { retailers } from './models/retailers.entity';
import { proference_filters } from './models/proference_filters.entity';
import { address_book } from './models/address_book.entity';
// import { config } from '../ormconf
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ayaan',
      password: 'postgres',
      database: 'everstocked',
      synchronize: true,
      entities: [
        Users,
        user_properties,
        user_roles,
        code_varification,
        onboarding,
        onboarding_properties,
        onboarding_documents,
        delivery_settings,
        delivery_window,
        preferences,
        listings,
        listing_setting,
        sold_listings,
        listing_schedular_data,
        configurations,
        my_notifications,
        categories,
        sub_categories,
        retailers,
        proference_filters,
        address_book,
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
