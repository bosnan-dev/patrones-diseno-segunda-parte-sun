import type { TarjetaLealtad } from "./tarjeta-lealtad.interface";

export class Caja {
  cobrarPedido(montoTotal: number, tarjeta: TarjetaLealtad): void {
    const descuento = tarjeta.calcularDescuento(montoTotal);
    const montoAPagar = montoTotal - descuento;
    tarjeta.acumularPuntos(montoAPagar);

    console.log(`Cliente: ${tarjeta.obtenerNombreDelTitular()}`);
    console.log(
      `Total: Q${montoTotal.toFixed(2)} | Descuento: Q${descuento.toFixed(2)} | A pagar: Q${montoAPagar.toFixed(2)}`
    );
    console.log(`Puntos acumulados: ${tarjeta.obtenerPuntos()}`);
    console.log("---");
  }
}
