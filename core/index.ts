import inquirer from "inquirer";
import {
  registerUser,
  obtainParticipants,
  totalParticipants,
  executeLottery,
} from "./actions";
(async () => {
  const options: any[] = [
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

  const result = await inquirer.prompt(options);
  if (result.options === "Registrar participante") {
    register();
  } else if (result.options === "Lista de participantes") {
    const participants = obtainParticipants();
    console.log(participants);
  } else if (result.options === "Obtener total de participantes") {
    const total = totalParticipants();
    console.log(`Hay ${total} participantes registrados`);
  } else if (result.options === "Generar ganadores") {
    console.log("#########################");
    console.log("######  GANADORES  ######");
    console.log("#########################");
    const winners = await execLottery();
    console.log(winners);
  }
})();

async function register() {
  const qs: any[] = [
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
  const result = await inquirer.prompt(qs);
  registerUser(result);
}

async function execLottery() {
  const qs: any = [
    {
      name: "totalWinners",
      type: "number",
      message: "Ingresa el numero de ganadores",
    },
  ];
  const { totalWinners } = await inquirer.prompt(qs);
  if (!totalWinners) {
    return "Introduce un valor valido";
  }

  const result = executeLottery(totalWinners);
  return result
}
