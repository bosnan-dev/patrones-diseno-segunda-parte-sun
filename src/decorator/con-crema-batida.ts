import { DecoradorBebida } from "./decorador-bebida";

export class ConCremaBatida extends DecoradorBebida {
  override obtenerDescripcion(): string {
    return `${this.bebidaEnvuelta.obtenerDescripcion()}, con crema batida`;
  }

  override obtenerPrecio(): number {
    return this.bebidaEnvuelta.obtenerPrecio() + 7;
  }
}
