import { Plantilla } from "../types/types";

const comprobarFilas = (tabla: Plantilla): boolean => {
  for (let i = 0; i < tabla.length; i++) {
    if (
      tabla[i][0] !== "" &&
      tabla[i][0] === tabla[i][1] &&
      tabla[i][1] === tabla[i][2]
    ) {
      return true;
    }
  }
  return false;
};

const comprobarColumnas = (tabla: Plantilla): boolean => {
  for (let j = 0; j < tabla.length; j++) {
    if (
      tabla[0][j] !== "" &&
      tabla[0][j] === tabla[1][j] &&
      tabla[1][j] === tabla[2][j]
    ) {
      return true;
    }
  }
  return false;
};

const comprobarDiagonales = (tabla: Plantilla): boolean => {
  if (
    (tabla[0][0] !== "" &&
      tabla[0][0] === tabla[1][1] &&
      tabla[1][1] === tabla[2][2]) ||
    (tabla[2][0] !== "" &&
      tabla[2][0] === tabla[1][1] &&
      tabla[1][1] === tabla[0][2])
  ) {
    return true;
  }
  return false;
};

export const comprobarEmpate = (tabla: Plantilla) => {
  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
      if (tabla[i][j] === "") return false;
    }
  }
  return true;
};

export const comprobarGanador = (tabla: Plantilla): boolean =>
  comprobarFilas(tabla) ||
  comprobarColumnas(tabla) ||
  comprobarDiagonales(tabla);
