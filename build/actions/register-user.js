"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
const fs_1 = __importDefault(require("fs"));
const obtain_participants_1 = require("./obtain-participants");
function registerUser(user) {
    const newParticipant = Object.assign(Object.assign({}, user), { date: new Date() });
    const participants = (0, obtain_participants_1.obtainParticipants)();
    participants.push(newParticipant);
    const data = JSON.stringify(participants);
    fs_1.default.writeFileSync("participants.json", data);
}
