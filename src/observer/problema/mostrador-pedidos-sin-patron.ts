class PantallaCliente {
  mostrarPedidoListo(numeroDePedido: number): void {
    console.log(`[Pantalla] Pedido #${numeroDePedido} listo para recoger`);
  }
}

class Caja {
  registrarPedidoEntregado(numeroDePedido: number): void {
    console.log(`[Caja] Pedido #${numeroDePedido} registrado como entregado`);
  }
}

class Inventario {
  descontarIngredientes(descripcion: string): void {
    console.log(`[Inventario] Descontando ingredientes de: ${descripcion}`);
  }
}

class MostradorPedidosSinPatron {
  private readonly pantallaCliente = new PantallaCliente();
  private readonly caja = new Caja();
  private readonly inventario = new Inventario();

  anunciarPedidoListo(numeroDePedido: number, descripcion: string): void {
    console.log(`--- Mostrador: pedido #${numeroDePedido} listo (${descripcion}) ---`);
    this.pantallaCliente.mostrarPedidoListo(numeroDePedido);
    this.caja.registrarPedidoEntregado(numeroDePedido);
    this.inventario.descontarIngredientes(descripcion);
  }
}

const mostradorPedidos = new MostradorPedidosSinPatron();
mostradorPedidos.anunciarPedidoListo(101, "Café americano, con leche");
