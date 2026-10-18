export interface DatosPedidoListo {
  numeroDePedido: number;
  descripcion: string;
}

export interface ObservadorPedido {
  recibirPedidoListo(datosDelPedido: DatosPedidoListo): void;
}
