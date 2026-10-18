import { DecoradorBebida } from "./decorador-bebida";

export class ConDescuentoEmpleado extends DecoradorBebida {
  private readonly porcentajeDeDescuento = 0.1; 

  override obtenerDescripcion(): string {
    return `${this.bebidaEnvuelta.obtenerDescripcion()}, con descuento de empleado`;
  }

  override obtenerPrecio(): number {
    const precioSinDescuento = this.bebidaEnvuelta.obtenerPrecio();
    const montoDelDescuento = precioSinDescuento * this.porcentajeDeDescuento;
    return precioSinDescuento - montoDelDescuento;
  }
}
