import type { DatosPedidoListo, ObservadorPedido } from "./observador-pedido.interface";

export class ObservadorPantallaCliente implements ObservadorPedido {
  recibirPedidoListo(datosDelPedido: DatosPedidoListo): void {
    console.log(`[Pantalla] Pedido #${datosDelPedido.numeroDePedido} listo para recoger`);
  }
}

export class ObservadorCaja implements ObservadorPedido {
  recibirPedidoListo(datosDelPedido: DatosPedidoListo): void {
    console.log(`[Caja] Pedido #${datosDelPedido.numeroDePedido} registrado como entregado`);
  }
}

export class ObservadorInventario implements ObservadorPedido {
  recibirPedidoListo(datosDelPedido: DatosPedidoListo): void {
    console.log(`[Inventario] Descontando ingredientes de: ${datosDelPedido.descripcion}`);
  }
}
