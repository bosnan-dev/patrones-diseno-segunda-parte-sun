
import type { TarjetaLealtad } from "./tarjeta-lealtad.interface";
import { TarjetaLealtadInexistente } from "./tarjeta-lealtad-inexistente";

export class RegistroTarjetasLealtad {
  private readonly tarjetasPorTelefono = new Map<string, TarjetaLealtad>();
  private readonly tarjetaInexistente = new TarjetaLealtadInexistente();

  registrar(numeroDeTelefono: string, tarjeta: TarjetaLealtad): void {
    this.tarjetasPorTelefono.set(numeroDeTelefono, tarjeta);
  }

  buscarPorTelefono(numeroDeTelefono: string): TarjetaLealtad {
    return this.tarjetasPorTelefono.get(numeroDeTelefono) ?? this.tarjetaInexistente;
  }
}
