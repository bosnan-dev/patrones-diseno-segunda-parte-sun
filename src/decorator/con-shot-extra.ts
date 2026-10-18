import { DecoradorBebida } from "./decorador-bebida";

export class ConShotExtra extends DecoradorBebida {
  override obtenerDescripcion(): string {
    return `${this.bebidaEnvuelta.obtenerDescripcion()}, con shot extra`;
  }

  override obtenerPrecio(): number {
    return this.bebidaEnvuelta.obtenerPrecio() + 6;
  }
}
