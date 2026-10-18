import type { Bebida } from "./bebida.interface";
import { CafeAmericano } from "./cafe-americano";
import { CafeEspresso } from "./cafe-espresso";
// import { DecoradorBebida } from "./decorador-bebida";

import { ConLeche } from "./con-leche";
import { ConCaramelo } from "./con-caramelo";
import { ConShotExtra } from "./con-shot-extra";

import { ConCremaBatida } from "./con-crema-batida";
import { ConDescuentoEmpleado } from "./con-descuento-empleado";

function imprimirPedido(bebida: Bebida): void {
  console.log(`${bebida.obtenerDescripcion()} ---> Q${bebida.obtenerPrecio().toFixed(2)}`);
}

const americanoSolo = new CafeAmericano();
imprimirPedido(americanoSolo);

const espressoSolo = new CafeEspresso();
imprimirPedido(espressoSolo);

// const pruebaDecoradorSolo = new DecoradorBebida(new CafeAmericano());

const americanoConLeche = new ConLeche(new CafeAmericano());
imprimirPedido(americanoConLeche);


const espressoConLeche = new ConLeche(new CafeEspresso());
imprimirPedido(espressoConLeche);

//-------------------


const americanoConLecheYCaramelo = new ConCaramelo(new ConLeche(new CafeAmericano()));
imprimirPedido(americanoConLecheYCaramelo);

const espressoConLecheYShotExtra = new ConShotExtra(new ConLeche(new CafeEspresso()));
imprimirPedido(espressoConLecheYShotExtra);

const espressoConDobleCaramelo = new ConCaramelo(new ConCaramelo(new CafeEspresso()));
imprimirPedido(espressoConDobleCaramelo);


//---------------------------

const espressoCompleto = new ConCremaBatida(new ConShotExtra(new ConLeche(new CafeEspresso())));
imprimirPedido(espressoCompleto);

const descuentoAplicadoAlFinal = new ConDescuentoEmpleado(
  new ConCaramelo(new ConLeche(new CafeAmericano()))
);
imprimirPedido(descuentoAplicadoAlFinal);

const descuentoAplicadoAlInicio = new ConCaramelo(
  new ConLeche(new ConDescuentoEmpleado(new CafeAmericano()))
);
imprimirPedido(descuentoAplicadoAlInicio);


// console.log(descuentoAplicadoAlFinal.obtenerPrecio());


