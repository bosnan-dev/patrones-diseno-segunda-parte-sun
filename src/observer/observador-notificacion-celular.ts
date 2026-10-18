import type { DatosPedidoListo, ObservadorPedido } from "./observador-pedido.interface";

export class ObservadorNotificacionCelular implements ObservadorPedido {
  private readonly numeroDeCelular: string;

  constructor(numeroDeCelular: string) {
    this.numeroDeCelular = numeroDeCelular;
  }

  recibirPedidoListo(datosDelPedido: DatosPedidoListo): void {
    console.log(
      `[Celular del gerente ${this.numeroDeCelular}] Se entregó el pedido #${datosDelPedido.numeroDePedido}`
    );
  }
}

