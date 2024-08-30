import { obtainParticipants } from "./obtain-participants";
import { IUser } from "../models";
import { sampleSize } from "lodash";

export function executeLottery(winners: number = 1): Array<IUser> {
  const participants = obtainParticipants();
  const indexWinner = (Math.random() * participants.length) | 0;
  const result = sampleSize(participants, winners);

  return result;
}
