CREATE TABLE IF NOT EXISTS "employee_salaries" (
	"_id" serial PRIMARY KEY NOT NULL,
	"employee_id" smallint NOT NULL,
	"amount" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "employees" (
	"_id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"address" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_bill_items" (
	"_id" serial PRIMARY KEY NOT NULL,
	"food_bill_id" smallint NOT NULL,
	"food_variant_price_id" smallint NOT NULL,
	"quantity" smallint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_bills" (
	"_id" serial PRIMARY KEY NOT NULL,
	"effective_price" integer,
	"guest_id" smallint DEFAULT null,
	"stay_bill_id" smallint DEFAULT null,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_categories" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_groups" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_variant_prices" (
	"_id" smallint PRIMARY KEY NOT NULL,
	"food_variant_id" smallint NOT NULL,
	"price" smallint NOT NULL,
	"is_current" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "food_variants" (
	"_id" smallint PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"food_id" smallint NOT NULL,
	"is_available" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "foods" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"description" varchar,
	"type" smallint NOT NULL,
	"category_id" smallint NOT NULL,
	"group_id" smallint NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guest_stays" (
	"guest_id" smallint NOT NULL,
	"stay_bill_id" smallint NOT NULL,
	CONSTRAINT "guest_stays_pk" PRIMARY KEY("guest_id","stay_bill_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guests" (
	"_id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"sex" smallint NOT NULL,
	"occupation" varchar,
	"dob" date NOT NULL,
	"doc_id" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payments" (
	"_id" serial PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL,
	"payment_method" smallint NOT NULL,
	"note" varchar,
	"food_bill_id" smallint DEFAULT null,
	"stay_bill_id" smallint DEFAULT null,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "room_media" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"room_id" smallint NOT NULL,
	"type" smallint NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "room_prices" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"value" smallint NOT NULL,
	"is_current" boolean DEFAULT true,
	"room_id" smallint NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rooms" (
	"_id" "smallserial" PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"floor" smallint NOT NULL,
	"bed_count" smallint NOT NULL,
	"description" varchar,
	"is_ac_available" boolean DEFAULT false,
	"is_toilet_style_indian" boolean DEFAULT true,
	"is_geyser_available" boolean DEFAULT false,
	"is_occupied" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stay_bills" (
	"_id" serial PRIMARY KEY NOT NULL,
	"price_id" smallint NOT NULL,
	"room_id" smallint NOT NULL,
	"effective_price" integer NOT NULL,
	"check_in" timestamp NOT NULL,
	"check_out" timestamp,
	"purpose_of_stay" varchar,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_salaries" ADD CONSTRAINT "employee_salaries_employee_id_employees__id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_bill_items" ADD CONSTRAINT "food_bill_items_food_bill_id_food_bills__id_fk" FOREIGN KEY ("food_bill_id") REFERENCES "public"."food_bills"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_bill_items" ADD CONSTRAINT "food_bill_items_food_variant_price_id_food_variant_prices__id_fk" FOREIGN KEY ("food_variant_price_id") REFERENCES "public"."food_variant_prices"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_bills" ADD CONSTRAINT "food_bills_guest_id_guests__id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."guests"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_bills" ADD CONSTRAINT "food_bills_stay_bill_id_stay_bills__id_fk" FOREIGN KEY ("stay_bill_id") REFERENCES "public"."stay_bills"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_variant_prices" ADD CONSTRAINT "food_variant_prices_food_variant_id_food_variants__id_fk" FOREIGN KEY ("food_variant_id") REFERENCES "public"."food_variants"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "food_variants" ADD CONSTRAINT "food_variants_food_id_foods__id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."foods"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "foods" ADD CONSTRAINT "foods_category_id_food_categories__id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."food_categories"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "foods" ADD CONSTRAINT "foods_group_id_food_groups__id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."food_groups"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guest_stays" ADD CONSTRAINT "guest_stays_guest_id_guests__id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."guests"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guest_stays" ADD CONSTRAINT "guest_stays_stay_bill_id_stay_bills__id_fk" FOREIGN KEY ("stay_bill_id") REFERENCES "public"."stay_bills"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_food_bill_id_food_bills__id_fk" FOREIGN KEY ("food_bill_id") REFERENCES "public"."food_bills"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_stay_bill_id_stay_bills__id_fk" FOREIGN KEY ("stay_bill_id") REFERENCES "public"."stay_bills"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "room_media" ADD CONSTRAINT "room_media_room_id_rooms__id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "room_prices" ADD CONSTRAINT "room_prices_room_id_rooms__id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stay_bills" ADD CONSTRAINT "stay_bills_price_id_room_prices__id_fk" FOREIGN KEY ("price_id") REFERENCES "public"."room_prices"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stay_bills" ADD CONSTRAINT "stay_bills_room_id_rooms__id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
