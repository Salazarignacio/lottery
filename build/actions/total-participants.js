"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalParticipants = totalParticipants;
const obtain_participants_1 = require("./obtain-participants");
function totalParticipants() {
    const response = (0, obtain_participants_1.obtainParticipants)();
    return response.length;
}
