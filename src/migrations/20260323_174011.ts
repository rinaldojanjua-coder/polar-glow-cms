import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_features_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_order_idx\` ON \`pages_blocks_features_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_parent_id_idx\` ON \`pages_blocks_features_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'What''s Included',
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_order_idx\` ON \`pages_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_parent_id_idx\` ON \`pages_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_path_idx\` ON \`pages_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_image_idx\` ON \`pages_blocks_features\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing_tiers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`price\` text,
  	\`duration\` text,
  	\`description\` text,
  	\`highlighted\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_pricing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_tiers_order_idx\` ON \`pages_blocks_pricing_tiers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_tiers_parent_id_idx\` ON \`pages_blocks_pricing_tiers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Pricing',
  	\`subtitle\` text DEFAULT 'Transparent pricing with no hidden fees. All prices include mobile service.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_order_idx\` ON \`pages_blocks_pricing\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_parent_id_idx\` ON \`pages_blocks_pricing\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_path_idx\` ON \`pages_blocks_pricing\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_process_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_process\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_process_steps_order_idx\` ON \`pages_blocks_process_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_process_steps_parent_id_idx\` ON \`pages_blocks_process_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_process\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Process',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_process_order_idx\` ON \`pages_blocks_process\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_process_parent_id_idx\` ON \`pages_blocks_process\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_process_path_idx\` ON \`pages_blocks_process\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_photo_gallery_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`alt\` text DEFAULT 'Polar Glow Detailing work',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_photo_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_photos_order_idx\` ON \`pages_blocks_photo_gallery_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_photos_parent_id_idx\` ON \`pages_blocks_photo_gallery_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_photos_image_idx\` ON \`pages_blocks_photo_gallery_photos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_photo_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Real Results',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_order_idx\` ON \`pages_blocks_photo_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_parent_id_idx\` ON \`pages_blocks_photo_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_photo_gallery_path_idx\` ON \`pages_blocks_photo_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Ready to Get Started?',
  	\`subheading\` text DEFAULT 'Contact us for a free estimate. We come to you anywhere in the Eagle River and Anchorage area.',
  	\`primary_button_text\` text DEFAULT 'Book Now',
  	\`primary_button_url\` text DEFAULT 'https://book.squareup.com/appointments/i29sd6gimvwp8t/location/L61N64Z45B3R9/services?buttonTextColor=ffffff&color=4a749b&locale=en&referrer=so',
  	\`secondary_button_text\` text DEFAULT 'Call (760) 213-9943',
  	\`secondary_button_url\` text DEFAULT 'tel:7602139943',
  	\`style\` text DEFAULT 'dark',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_banner_order_idx\` ON \`pages_blocks_cta_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_banner_parent_id_idx\` ON \`pages_blocks_cta_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_banner_path_idx\` ON \`pages_blocks_cta_banner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`subheading\` text,
  	\`background_image\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_order_idx\` ON \`pages_blocks_hero_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_parent_id_idx\` ON \`pages_blocks_hero_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_simple_path_idx\` ON \`pages_blocks_hero_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_area_info_neighborhoods\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_area_info\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_neighborhoods_order_idx\` ON \`pages_blocks_area_info_neighborhoods\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_neighborhoods_parent_id_idx\` ON \`pages_blocks_area_info_neighborhoods\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_area_info_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`icon\` text DEFAULT '✓',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_area_info\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_highlights_order_idx\` ON \`pages_blocks_area_info_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_highlights_parent_id_idx\` ON \`pages_blocks_area_info_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_area_info\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`image\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_order_idx\` ON \`pages_blocks_area_info\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_parent_id_idx\` ON \`pages_blocks_area_info\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_area_info_path_idx\` ON \`pages_blocks_area_info\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_service_cards_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`price\` text,
  	\`duration\` text,
  	\`description\` text,
  	\`image\` text,
  	\`link\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_service_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_service_cards_cards_order_idx\` ON \`pages_blocks_service_cards_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_service_cards_cards_parent_id_idx\` ON \`pages_blocks_service_cards_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_service_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Services',
  	\`subheading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_service_cards_order_idx\` ON \`pages_blocks_service_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_service_cards_parent_id_idx\` ON \`pages_blocks_service_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_service_cards_path_idx\` ON \`pages_blocks_service_cards\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_before_after_pairs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`before_image\` text,
  	\`after_image\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_before_after\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_before_after_pairs_order_idx\` ON \`pages_blocks_before_after_pairs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_before_after_pairs_parent_id_idx\` ON \`pages_blocks_before_after_pairs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_before_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'See the Difference',
  	\`subheading\` text DEFAULT 'Drag the slider to see real before and after results from our detailing work.',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_before_after_order_idx\` ON \`pages_blocks_before_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_before_after_parent_id_idx\` ON \`pages_blocks_before_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_before_after_path_idx\` ON \`pages_blocks_before_after\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`src\` text,
  	\`alt\` text DEFAULT 'Polar Glow Detailing work',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_grid_images_order_idx\` ON \`pages_blocks_gallery_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_grid_images_parent_id_idx\` ON \`pages_blocks_gallery_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Real Work',
  	\`subheading\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_grid_order_idx\` ON \`pages_blocks_gallery_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_grid_parent_id_idx\` ON \`pages_blocks_gallery_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_grid_path_idx\` ON \`pages_blocks_gallery_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_info\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Contact Information',
  	\`show_form\` integer DEFAULT true,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_info_order_idx\` ON \`pages_blocks_contact_info\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_info_parent_id_idx\` ON \`pages_blocks_contact_info\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_info_path_idx\` ON \`pages_blocks_contact_info\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_banner_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stats_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_banner_stats_order_idx\` ON \`pages_blocks_stats_banner_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_banner_stats_parent_id_idx\` ON \`pages_blocks_stats_banner_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stats_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_banner_order_idx\` ON \`pages_blocks_stats_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_banner_parent_id_idx\` ON \`pages_blocks_stats_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stats_banner_path_idx\` ON \`pages_blocks_stats_banner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_features_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_order_idx\` ON \`_pages_v_blocks_features_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_parent_id_idx\` ON \`_pages_v_blocks_features_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'What''s Included',
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_order_idx\` ON \`_pages_v_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_parent_id_idx\` ON \`_pages_v_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_path_idx\` ON \`_pages_v_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_image_idx\` ON \`_pages_v_blocks_features\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing_tiers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`price\` text,
  	\`duration\` text,
  	\`description\` text,
  	\`highlighted\` integer DEFAULT false,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_pricing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_tiers_order_idx\` ON \`_pages_v_blocks_pricing_tiers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_tiers_parent_id_idx\` ON \`_pages_v_blocks_pricing_tiers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Pricing',
  	\`subtitle\` text DEFAULT 'Transparent pricing with no hidden fees. All prices include mobile service.',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_order_idx\` ON \`_pages_v_blocks_pricing\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_parent_id_idx\` ON \`_pages_v_blocks_pricing\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_path_idx\` ON \`_pages_v_blocks_pricing\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_process_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_process\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_process_steps_order_idx\` ON \`_pages_v_blocks_process_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_process_steps_parent_id_idx\` ON \`_pages_v_blocks_process_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_process\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Process',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_process_order_idx\` ON \`_pages_v_blocks_process\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_process_parent_id_idx\` ON \`_pages_v_blocks_process\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_process_path_idx\` ON \`_pages_v_blocks_process\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_photo_gallery_photos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`alt\` text DEFAULT 'Polar Glow Detailing work',
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_photo_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_photos_order_idx\` ON \`_pages_v_blocks_photo_gallery_photos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_photos_parent_id_idx\` ON \`_pages_v_blocks_photo_gallery_photos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_photos_image_idx\` ON \`_pages_v_blocks_photo_gallery_photos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_photo_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Real Results',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_order_idx\` ON \`_pages_v_blocks_photo_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_parent_id_idx\` ON \`_pages_v_blocks_photo_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_photo_gallery_path_idx\` ON \`_pages_v_blocks_photo_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Ready to Get Started?',
  	\`subheading\` text DEFAULT 'Contact us for a free estimate. We come to you anywhere in the Eagle River and Anchorage area.',
  	\`primary_button_text\` text DEFAULT 'Book Now',
  	\`primary_button_url\` text DEFAULT 'https://book.squareup.com/appointments/i29sd6gimvwp8t/location/L61N64Z45B3R9/services?buttonTextColor=ffffff&color=4a749b&locale=en&referrer=so',
  	\`secondary_button_text\` text DEFAULT 'Call (760) 213-9943',
  	\`secondary_button_url\` text DEFAULT 'tel:7602139943',
  	\`style\` text DEFAULT 'dark',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_banner_order_idx\` ON \`_pages_v_blocks_cta_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_banner_parent_id_idx\` ON \`_pages_v_blocks_cta_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_banner_path_idx\` ON \`_pages_v_blocks_cta_banner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_simple\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`subheading\` text,
  	\`background_image\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_simple_order_idx\` ON \`_pages_v_blocks_hero_simple\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_simple_parent_id_idx\` ON \`_pages_v_blocks_hero_simple\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_simple_path_idx\` ON \`_pages_v_blocks_hero_simple\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_area_info_neighborhoods\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_area_info\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_neighborhoods_order_idx\` ON \`_pages_v_blocks_area_info_neighborhoods\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_neighborhoods_parent_id_idx\` ON \`_pages_v_blocks_area_info_neighborhoods\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_area_info_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`icon\` text DEFAULT '✓',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_area_info\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_highlights_order_idx\` ON \`_pages_v_blocks_area_info_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_highlights_parent_id_idx\` ON \`_pages_v_blocks_area_info_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_area_info\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text,
  	\`description\` text,
  	\`image\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_order_idx\` ON \`_pages_v_blocks_area_info\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_parent_id_idx\` ON \`_pages_v_blocks_area_info\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_area_info_path_idx\` ON \`_pages_v_blocks_area_info\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_service_cards_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`price\` text,
  	\`duration\` text,
  	\`description\` text,
  	\`image\` text,
  	\`link\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_service_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_service_cards_cards_order_idx\` ON \`_pages_v_blocks_service_cards_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_service_cards_cards_parent_id_idx\` ON \`_pages_v_blocks_service_cards_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_service_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Services',
  	\`subheading\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_service_cards_order_idx\` ON \`_pages_v_blocks_service_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_service_cards_parent_id_idx\` ON \`_pages_v_blocks_service_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_service_cards_path_idx\` ON \`_pages_v_blocks_service_cards\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_before_after_pairs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`before_image\` text,
  	\`after_image\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_before_after\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_before_after_pairs_order_idx\` ON \`_pages_v_blocks_before_after_pairs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_before_after_pairs_parent_id_idx\` ON \`_pages_v_blocks_before_after_pairs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_before_after\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'See the Difference',
  	\`subheading\` text DEFAULT 'Drag the slider to see real before and after results from our detailing work.',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_before_after_order_idx\` ON \`_pages_v_blocks_before_after\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_before_after_parent_id_idx\` ON \`_pages_v_blocks_before_after\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_before_after_path_idx\` ON \`_pages_v_blocks_before_after\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`src\` text,
  	\`alt\` text DEFAULT 'Polar Glow Detailing work',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_grid_images_order_idx\` ON \`_pages_v_blocks_gallery_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_grid_images_parent_id_idx\` ON \`_pages_v_blocks_gallery_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Our Real Work',
  	\`subheading\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_grid_order_idx\` ON \`_pages_v_blocks_gallery_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_grid_parent_id_idx\` ON \`_pages_v_blocks_gallery_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_grid_path_idx\` ON \`_pages_v_blocks_gallery_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_info\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`heading\` text DEFAULT 'Contact Information',
  	\`show_form\` integer DEFAULT true,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_info_order_idx\` ON \`_pages_v_blocks_contact_info\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_info_parent_id_idx\` ON \`_pages_v_blocks_contact_info\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_info_path_idx\` ON \`_pages_v_blocks_contact_info\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stats_banner_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stats_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stats_banner_stats_order_idx\` ON \`_pages_v_blocks_stats_banner_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stats_banner_stats_parent_id_idx\` ON \`_pages_v_blocks_stats_banner_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stats_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stats_banner_order_idx\` ON \`_pages_v_blocks_stats_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stats_banner_parent_id_idx\` ON \`_pages_v_blocks_stats_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stats_banner_path_idx\` ON \`_pages_v_blocks_stats_banner\` (\`_path\`);`)
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
  await db.run(sql`DROP TABLE \`pages_blocks_features_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing_tiers\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_process_steps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_process\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_photo_gallery_photos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_photo_gallery\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_banner\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_simple\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_area_info_neighborhoods\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_area_info_highlights\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_area_info\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_service_cards_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_service_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_before_after_pairs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_before_after\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_grid_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_info\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_banner_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stats_banner\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_features_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing_tiers\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_process_steps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_process\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_photo_gallery_photos\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_photo_gallery\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta_banner\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_simple\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_area_info_neighborhoods\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_area_info_highlights\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_area_info\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_service_cards_cards\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_service_cards\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_before_after_pairs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_before_after\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_grid_images\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_info\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stats_banner_stats\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stats_banner\`;`)
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
