import { DecoradorBebida } from "./decorador-bebida";

export class ConCaramelo extends DecoradorBebida {
  override obtenerDescripcion(): string {
    return `${this.bebidaEnvuelta.obtenerDescripcion()}, con caramelo`;
  }

  override obtenerPrecio(): number {
    return this.bebidaEnvuelta.obtenerPrecio() + 5;
  }
}
