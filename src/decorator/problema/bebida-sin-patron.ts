export class BebidaSinPatron {
  private readonly tipoDeCafe: string;
  private readonly tieneLeche: boolean;
  private readonly tieneCaramelo: boolean;
  private readonly tieneShotExtra: boolean;
  // private readonly tieneCremaBatida: boolean;

  constructor(
    tipoDeCafe: string,
    tieneLeche: boolean,
    tieneCaramelo: boolean,
    tieneShotExtra: boolean,
    // tieneCremaBatida: boolean
  ) {
    this.tipoDeCafe = tipoDeCafe;
    this.tieneLeche = tieneLeche;
    this.tieneCaramelo = tieneCaramelo;
    this.tieneShotExtra = tieneShotExtra;
    // this.tieneCremaBatida = tieneCremaBatida;
  }

  obtenerDescripcion(): string {
    let descripcion = this.tipoDeCafe;

    if (this.tieneLeche) {
      descripcion += ", con leche";
    }
    if (this.tieneCaramelo) {
      descripcion += ", con caramelo";
    }
    if (this.tieneShotExtra) {
      descripcion += ", con shot extra";
    }
    // if (this.tieneCremaBatida) {
    //   descripcion += ", con crema batida";
    // }


    return descripcion;
  }

  obtenerPrecio(): number {
    let precio = 0;

    if (this.tipoDeCafe === "Americano") {
      precio = 15;
    } else if (this.tipoDeCafe === "Espresso") {
      precio = 12;
    }

    if (this.tieneLeche) {
      precio += 4;
    }
    if (this.tieneCaramelo) {
      precio += 5;
    }
    if (this.tieneShotExtra) {
      precio += 6;
    }
    // if (this.tieneCremaBatida) {
    //  precio += 7;
    // }


    return precio;
  }
}
