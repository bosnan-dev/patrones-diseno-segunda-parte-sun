import { MostradorPedidos } from "./mostrador-pedidos";
import {
  ObservadorPantallaCliente,
  ObservadorCaja,
  ObservadorInventario,
} from "./observadores-cafeteria";

import { ObservadorNotificacionCelular } from "./observador-notificacion-celular";

const mostradorPedidos = new MostradorPedidos();

const pantallaCliente = new ObservadorPantallaCliente();
const caja = new ObservadorCaja();
const inventario = new ObservadorInventario();

mostradorPedidos.suscribir(pantallaCliente);
mostradorPedidos.suscribir(caja);
mostradorPedidos.suscribir(inventario);

mostradorPedidos.anunciarPedidoListo(101, "Café americano, con leche");

//-------------------


const celularDelGerente = new ObservadorNotificacionCelular("5555-1234");
mostradorPedidos.suscribir(celularDelGerente);

mostradorPedidos.anunciarPedidoListo(102, "Café espresso, con caramelo");

mostradorPedidos.desuscribir(pantallaCliente);

mostradorPedidos.anunciarPedidoListo(103, "Café americano, con crema batida");

