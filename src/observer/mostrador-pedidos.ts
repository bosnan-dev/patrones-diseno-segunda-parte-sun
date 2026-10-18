import type { DatosPedidoListo, ObservadorPedido } from "./observador-pedido.interface";

export class MostradorPedidos {
  private readonly observadores: ObservadorPedido[] = [];

  suscribir(observador: ObservadorPedido): void {
    if (this.observadores.includes(observador)) {
      return;
    }
    this.observadores.push(observador);
  }

  desuscribir(observador: ObservadorPedido): void {
    const posicionDelObservador = this.observadores.indexOf(observador);
    if (posicionDelObservador === -1) {
      return;
    }
    this.observadores.splice(posicionDelObservador, 1);
  }

  anunciarPedidoListo(numeroDePedido: number, descripcion: string): void {
    console.log(`--- Mostrador: pedido #${numeroDePedido} listo (${descripcion}) ---`);
    const datosDelPedido: DatosPedidoListo = { numeroDePedido, descripcion };
    const copiaDeObservadores = [...this.observadores];
    for (const observador of copiaDeObservadores) {
      observador.recibirPedidoListo(datosDelPedido);
    }
  }
}
