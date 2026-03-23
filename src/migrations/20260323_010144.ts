import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`site_settings_service_areas_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_service_areas_list_order_idx\` ON \`site_settings_service_areas_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_service_areas_list_parent_id_idx\` ON \`site_settings_service_areas_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_stats_bar\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	\`label\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_stats_bar_order_idx\` ON \`site_settings_stats_bar\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_stats_bar_parent_id_idx\` ON \`site_settings_stats_bar\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_why_choose_us\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_why_choose_us_order_idx\` ON \`site_settings_why_choose_us\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_why_choose_us_parent_id_idx\` ON \`site_settings_why_choose_us\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`quote\` text NOT NULL,
  	\`author\` text NOT NULL,
  	\`location\` text,
  	\`rating\` numeric DEFAULT 5,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_testimonials_order_idx\` ON \`site_settings_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_testimonials_parent_id_idx\` ON \`site_settings_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'Polar Glow Detailing' NOT NULL,
  	\`tagline\` text DEFAULT 'Alaska''s Premier Auto Detailing',
  	\`description\` text DEFAULT 'Professional mobile interior auto detailing in Eagle River, Alaska. We come to you! Every detail includes shampoo.',
  	\`phone\` text DEFAULT '(760) 213-9943',
  	\`email\` text,
  	\`address\` text DEFAULT 'Eagle River, AK 99577',
  	\`hours\` text DEFAULT 'Mon–Sat 7am–6pm',
  	\`sunday_hours\` text DEFAULT 'Sun: Closed',
  	\`booking_url\` text DEFAULT 'https://book.squareup.com/appointments/i29sd6gimvwp8t/location/L61N64Z45B3R9/services?buttonTextColor=ffffff&color=4a749b&locale=en&referrer=so',
  	\`logo_id\` integer,
  	\`service_areas\` text DEFAULT 'Eagle River, Anchorage, Palmer, Wasilla',
  	\`cta_heading\` text DEFAULT 'Ready for a Fresh Interior?',
  	\`cta_subtext\` text DEFAULT 'Book your mobile interior detail today. We come to you in Eagle River, Anchorage, Palmer, and Wasilla. Every detail includes shampoo!',
  	\`footer_description\` text DEFAULT 'Professional mobile interior auto detailing in Eagle River, Alaska. We bring the showroom shine to your driveway with professional-grade products and meticulous technique.',
  	\`copyright_text\` text DEFAULT 'Polar Glow Detailing. All rights reserved.',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_site_settings\`("id", "site_name", "tagline", "description", "phone", "email", "address", "hours", "sunday_hours", "booking_url", "logo_id", "service_areas", "cta_heading", "cta_subtext", "footer_description", "copyright_text", "updated_at", "created_at") SELECT "id", "site_name", "tagline", "description", "phone", "email", "address", "hours", "sunday_hours", "booking_url", "logo_id", "service_areas", "cta_heading", "cta_subtext", "footer_description", "copyright_text", "updated_at", "created_at" FROM \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_site_settings\` RENAME TO \`site_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`site_settings_service_areas_list\`;`)
  await db.run(sql`DROP TABLE \`site_settings_stats_bar\`;`)
  await db.run(sql`DROP TABLE \`site_settings_why_choose_us\`;`)
  await db.run(sql`DROP TABLE \`site_settings_testimonials\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'AK Gutter Gals' NOT NULL,
  	\`phone\` text DEFAULT '907-599-0123',
  	\`email\` text,
  	\`address\` text,
  	\`logo_id\` integer,
  	\`service_areas\` text DEFAULT 'Anchorage, Eagle River, Girdwood, Palmer, Wasilla',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_site_settings\`("id", "site_name", "phone", "email", "address", "logo_id", "service_areas", "updated_at", "created_at") SELECT "id", "site_name", "phone", "email", "address", "logo_id", "service_areas", "updated_at", "created_at" FROM \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_site_settings\` RENAME TO \`site_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
}
