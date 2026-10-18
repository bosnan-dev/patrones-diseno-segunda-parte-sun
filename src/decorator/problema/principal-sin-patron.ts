import { BebidaSinPatron } from "./bebida-sin-patron";

const pedidoDelCliente = new BebidaSinPatron("Americano", true, true, false);

console.log(
  `${pedidoDelCliente.obtenerDescripcion()} ---> Q${pedidoDelCliente.obtenerPrecio().toFixed(2)}`
);
