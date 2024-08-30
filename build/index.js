"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const actions_1 = require("./actions");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const options = [
        {
            name: "options",
            type: "list",
            message: "¿Qué quieres hacer?",
            choices: [
                "Registrar participante",
                "Lista de participantes",
                "Obtener total de participantes",
                "Generar ganadores",
                "Salir",
            ],
        },
    ];
    const result = yield inquirer_1.default.prompt(options);
    if (result.options === "Registrar participante") {
        register();
    }
    else if (result.options === "Lista de participantes") {
        const participants = (0, actions_1.obtainParticipants)();
        console.log(participants);
    }
    else if (result.options === "Obtener total de participantes") {
        const total = (0, actions_1.totalParticipants)();
        console.log(`Hay ${total} participantes registrados`);
    }
    else if (result.options === "Generar ganadores") {
        console.log("#########################");
        console.log("######  GANADORES  ######");
        console.log("#########################");
        const winners = yield execLottery();
        console.log(winners);
    }
}))();
function register() {
    return __awaiter(this, void 0, void 0, function* () {
        const qs = [
            {
                name: "username",
                type: "input",
                message: "Nombre del participante",
            },
            {
                name: "email",
                type: "input",
                message: "email del participante",
            },
        ];
        const result = yield inquirer_1.default.prompt(qs);
        (0, actions_1.registerUser)(result);
    });
}
function execLottery() {
    return __awaiter(this, void 0, void 0, function* () {
        const qs = [
            {
                name: "totalWinners",
                type: "number",
                message: "Ingresa el numero de ganadores",
            },
        ];
        const { totalWinners } = yield inquirer_1.default.prompt(qs);
        if (!totalWinners) {
            return "Introduce un valor valido";
        }
        const result = (0, actions_1.executeLottery)(totalWinners);
        return result;
    });
}
