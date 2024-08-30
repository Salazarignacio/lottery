"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtainParticipants = obtainParticipants;
const fs_1 = __importDefault(require("fs"));
function obtainParticipants() {
    const response = fs_1.default.readFileSync("participants.json", "utf-8");
    if (!response)
        return [];
    return JSON.parse(response);
}
