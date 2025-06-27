

let robots = [];
let ganador = null;
const META = 60;

function crearRobots() {
    robots = [];
    for (let i = 1; i <= 7; i++) {
        robots.push({ nombre: `Robot${i}`, posicion: 0, pierdeTurno: false });
    }
}

function avanzar() {
    for (let robot of robots) {
        if (robot.pierdeTurno) {
            robot.pierdeTurno = false;
            continue;
        }
        if (Math.random() < 0.1) {
            robot.pierdeTurno = true;
            continue;
        }
        let avance = Math.floor(Math.random() * 7) + 4;
        robot.posicion += avance;
        if (robot.posicion >= META && !ganador) {
            ganador = robot.nombre;
        }
    }
}

function competencia() {
    crearRobots();
    ganador = null;
    let turno = 1;
    while (!ganador) {
        avanzar();
        turno++;
    }
    console.log(`¡${ganador} ha ganado la competencia!`);
}

competencia();
