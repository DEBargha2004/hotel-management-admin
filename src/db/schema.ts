import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  smallint,
  smallserial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
  id: smallserial("_id").primaryKey(),
  label: varchar("label").notNull(),
  floor: smallint("floor").notNull(),
  bedCount: smallint("bed_count").notNull(),
  description: varchar("description"),
  isAcAvailable: boolean("is_ac_available").default(false),
  isToiletStyleIndian: boolean("is_toilet_style_indian").default(true),
  isGeyserAvailable: boolean("is_geyser_available").default(false),
  isOccupied: boolean("is_occupied").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const roomPrices = pgTable("room_prices", {
  id: smallserial("_id").primaryKey(),
  value: smallint("value").notNull(),
  isCurrent: boolean("is_current").default(true),
  roomId: smallint("room_id")
    .notNull()
    .references(() => rooms.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const roomMedia = pgTable("room_media", {
  id: smallserial("_id").primaryKey(),
  roomId: smallint("room_id")
    .notNull()
    .references(() => rooms.id),
  type: smallint("type").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const stayBills = pgTable("stay_bills", {
  id: serial("_id").primaryKey(),
  priceId: smallint("price_id")
    .notNull()
    .references(() => roomPrices.id),
  roomId: smallint("room_id")
    .notNull()
    .references(() => rooms.id),
  effectivePrice: integer("effective_price").notNull(),
  checkIn: timestamp("check_in").notNull(),
  checkOut: timestamp("check_out"),
  purposeOfStay: varchar("purpose_of_stay"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const guestStays = pgTable(
  "guest_stays",
  {
    guestId: smallint("guest_id")
      .notNull()
      .references(() => guests.id),
    stayBillId: smallint("stay_bill_id")
      .notNull()
      .references(() => stayBills.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.guestId, table.stayBillId],
      name: "guest_stays_pk",
    }),
  }),
);

export const guests = pgTable("guests", {
  id: serial("_id").primaryKey(),
  name: varchar("name").notNull(),
  phone: varchar("phone").notNull(),
  sex: smallint("sex").notNull(),
  occupation: varchar("occupation"),
  dob: date("dob").notNull(),
  docId: varchar("doc_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const foodCategories = pgTable("food_categories", {
  id: smallserial("_id").primaryKey(),
  label: varchar("label").notNull(),
});

export const foodGroups = pgTable("food_groups", {
  id: smallserial("_id").primaryKey(),
  label: varchar("label").notNull(),
});

export const foods = pgTable("foods", {
  id: smallserial("_id").primaryKey(),
  label: varchar("label").notNull(),
  description: varchar("description"),
  type: smallint("type").notNull(),
  categoryId: smallint("category_id")
    .notNull()
    .references(() => foodCategories.id),
  groupId: smallint("group_id")
    .notNull()
    .references(() => foodGroups.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const foodVariants = pgTable("food_variants", {
  id: smallint("_id").primaryKey(),
  label: varchar("label").notNull(),
  foodId: smallint("food_id")
    .notNull()
    .references(() => foods.id),
  isAvailable: boolean("is_available").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const foodVariantPrices = pgTable("food_variant_prices", {
  id: smallint("_id").primaryKey(),
  foodVariantId: smallint("food_variant_id")
    .notNull()
    .references(() => foodVariants.id),
  price: smallint("price").notNull(),
  isCurrent: boolean("is_current").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const foodBills = pgTable("food_bills", {
  id: serial("_id").primaryKey(),
  effectivePrice: integer("effective_price"),
  guestId: smallint("guest_id")
    .references(() => guests.id)
    .default(sql`null`),
  stayBillId: smallint("stay_bill_id")
    .references(() => stayBills.id)
    .default(sql`null`),
  createdAt: timestamp("created_at").defaultNow(),
});

export const foodBillItems = pgTable("food_bill_items", {
  id: serial("_id").primaryKey(),
  foodBillId: smallint("food_bill_id")
    .notNull()
    .references(() => foodBills.id),
  foodVariantPriceId: smallint("food_variant_price_id")
    .notNull()
    .references(() => foodVariantPrices.id),
  quantity: smallint("quantity").notNull(),
});

export const payments = pgTable("payments", {
  id: serial("_id").primaryKey(),
  amount: integer("amount").notNull(),
  paymentMethod: smallint("payment_method").notNull(),
  note: varchar("note"),
  foodBillId: smallint("food_bill_id")
    .references(() => foodBills.id)
    .default(sql`null`),
  stayBillId: smallint("stay_bill_id")
    .references(() => stayBills.id)
    .default(sql`null`),
  createdAt: timestamp("created_at").defaultNow(),
});

export const employees = pgTable("employees", {
  id: serial("_id").primaryKey(),
  name: varchar("name").notNull(),
  phone: varchar("phone").notNull(),
  address: varchar("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const employeeSalaries = pgTable("employee_salaries", {
  id: serial("_id").primaryKey(),
  employeeId: smallint("employee_id")
    .notNull()
    .references(() => employees.id),
  value: integer("amount").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
