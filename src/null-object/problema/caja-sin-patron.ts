class TarjetaLealtadSinPatron {
  readonly nombreDelTitular: string;
  readonly porcentajeDeDescuento: number;
  private puntosAcumulados: number;

  constructor(nombreDelTitular: string, porcentajeDeDescuento: number, puntosIniciales: number) {
    this.nombreDelTitular = nombreDelTitular;
    this.porcentajeDeDescuento = porcentajeDeDescuento;
    this.puntosAcumulados = puntosIniciales;
  }

  acumularPuntos(montoPagado: number): void {
    this.puntosAcumulados += Math.floor(montoPagado / 10);
  }

  obtenerPuntos(): number {
    return this.puntosAcumulados;
  }
}

const tarjetasRegistradas = new Map<string, TarjetaLealtadSinPatron>([
  ["5555-0001", new TarjetaLealtadSinPatron("Ana López", 0.1, 120)],
]);

function buscarTarjetaPorTelefono(numeroDeTelefono: string): TarjetaLealtadSinPatron | null {
  return tarjetasRegistradas.get(numeroDeTelefono) ?? null;
}

function cobrarPedido(montoTotal: number, numeroDeTelefono: string): void {
  const tarjeta = buscarTarjetaPorTelefono(numeroDeTelefono);

  let nombreEnTicket = "Cliente sin tarjeta";
  if (tarjeta !== null) {
    nombreEnTicket = tarjeta.nombreDelTitular;
  }

  let descuento = 0;
  if (tarjeta !== null) {
    descuento = montoTotal * tarjeta.porcentajeDeDescuento;
  }

  const montoAPagar = montoTotal - descuento;

  if (tarjeta !== null) {
    tarjeta.acumularPuntos(montoAPagar);
  }

  console.log(`Cliente: ${nombreEnTicket}`);
  console.log(
    `Total: Q${montoTotal.toFixed(2)} | Descuento: Q${descuento.toFixed(2)} | A pagar: Q${montoAPagar.toFixed(2)}`
  );
   if (tarjeta !== null) {
     console.log(`Puntos acumulados: ${tarjeta.obtenerPuntos()}`);
   }

//   console.log(`Puntos acumulados: ${tarjeta.obtenerPuntos()}`);

// console.log(`Puntos acumulados: ${tarjeta?.obtenerPuntos()}`);

// console.log(`Puntos acumulados: ${tarjeta?.obtenerPuntos() ?? 0}`);

  console.log("---");
}

cobrarPedido(24, "5555-0001");
cobrarPedido(24, "5555-9999");
