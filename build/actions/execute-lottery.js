"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeLottery = executeLottery;
const obtain_participants_1 = require("./obtain-participants");
const lodash_1 = require("lodash");
function executeLottery(winners = 1) {
    const participants = (0, obtain_participants_1.obtainParticipants)();
    const indexWinner = (Math.random() * participants.length) | 0;
    const result = (0, lodash_1.sampleSize)(participants, winners);
    return result;
}
