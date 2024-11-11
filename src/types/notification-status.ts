import { notificationStatus } from "@/constants/db";

export type NotificationStatus = (typeof notificationStatus)[number]["value"];
