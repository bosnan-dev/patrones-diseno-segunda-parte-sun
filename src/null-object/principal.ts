import { RegistroTarjetasLealtad } from "./registro-tarjetas-lealtad";
import { TarjetaLealtadRegistrada } from "./tarjeta-lealtad-registrada";
import { Caja } from "./caja";

const registroTarjetas = new RegistroTarjetasLealtad();
registroTarjetas.registrar("5555-0001", new TarjetaLealtadRegistrada("Ana López", 0.1, 120));

const caja = new Caja();

caja.cobrarPedido(24, registroTarjetas.buscarPorTelefono("5555-0001"));
caja.cobrarPedido(24, registroTarjetas.buscarPorTelefono("5555-9999"));
