import fs from "fs";
import { IUser } from "../models";

export function obtainParticipants(): Array<IUser> {
  const response = fs.readFileSync("participants.json", "utf-8");
  if (!response) return [];
  return JSON.parse(response);
}
