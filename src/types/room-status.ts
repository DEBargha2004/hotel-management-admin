import { roomStatus } from "@/constants/db";

export type RoomStatus = (typeof roomStatus)[number]["value"];
