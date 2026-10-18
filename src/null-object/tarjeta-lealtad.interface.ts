export interface TarjetaLealtad {
  obtenerNombreDelTitular(): string;
  calcularDescuento(montoTotal: number): number;
  acumularPuntos(montoPagado: number): void;
  obtenerPuntos(): number;
}
