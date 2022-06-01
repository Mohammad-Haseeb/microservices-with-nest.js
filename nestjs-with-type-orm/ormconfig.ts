import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  // host: 'localhost',
  port: 5432,
  username: 'ayaan',
  password: 'postgres',
  database: 'everstocked',
  // entities: [Users, user_properties, user_roles],
  synchronize: true,
  entities: ['dist/src/**/*/entity.ts'],
  migrations: ['dist/src/db/migrations/*.ts'],
  // subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    // entitiesDir: 'src/entity',..
    migrationsDir: 'src/db/migrations/',
    // subscribersDir: 'src/subscriber',
  },
};
