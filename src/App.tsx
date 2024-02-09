import { useState } from "react";
import { Plantilla } from "./types/types";
import { comprobarGanador, comprobarEmpate } from "./logic/logica.juego";

function App() {
  const [cuadros, setCuadros] = useState<Plantilla>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const enum JUEGO {
    EN_JUEGO = "enjuego",
    GANO = "gano",
    EMPATE = "empate",
  }

  const [turno, setTurno] = useState(1);
  const [gameOver, setGameOver] = useState<JUEGO>(JUEGO.EN_JUEGO);

  const jugar = (i: number, j: number) => {
    if (cuadros[i][j] === "" && gameOver === JUEGO.EN_JUEGO) {
      const copiaCuadros = cuadros;
      copiaCuadros[i][j] = turno ? "x" : "o";
      setCuadros(copiaCuadros);
      setTurno((turno) => (turno ? 0 : 1));
      if (comprobarGanador(cuadros)) {
        setGameOver(JUEGO.GANO);
        return;
      } else if (comprobarEmpate(cuadros)) {
        setGameOver(JUEGO.EMPATE);
        return;
      }
    }
  };

  return (
    <>
      <div className="contenedor">
        <div className="juego">
          <div className="score">
            <span className={`jugador ${turno && "text-red-500"}`}>
              Jugador 1
            </span>
            <span className={`jugador ${!turno && "text-blue-500"}`}>
              Jugador 2
            </span>
          </div>
          <div className="tablero">
            {cuadros.map((fila, i) =>
              fila.map((valor, j) => (
                <button
                  key={`${i}${j}`}
                  className="cuadro"
                  onClick={() => jugar(i, j)}
                >
                  {valor}
                </button>
              ))
            )}
          </div>
          <div>
            {gameOver === JUEGO.EMPATE ? (
              <p>Empate!</p>
            ) : gameOver === JUEGO.GANO ? (
              <p>Ganó {turno ? "jugador 2" : "jugador 1"}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
