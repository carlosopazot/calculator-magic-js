let precioDolar = 850

function valor() {
  let continuar;
  do {
    let valorCarta = prompt('Ingrese el precio en dólar de la carta:');
    const precioFinal = (valorCarta * precioDolar)
    switch (true) {
      case precioFinal > 100000:
        alert('El valor de tu carta es ' + precioFinal + 'CLP.  Valiosa');
        break;
      case precioFinal > 50000:
        alert('El valor de tu carta es ' + precioFinal + 'CLP. Gran Valor');
        break;
      case precioFinal > 10000:
        alert('El valor de tu carta es ' + precioFinal + 'CLP. Medio Valor');
        break;
      case precioFinal > 0:
        alert('El valor de tu carta es ' + precioFinal + 'CLP. Poco valor');
        break;
      default:
        alert('Ingresa un valor válido');
        break;
    }
    continuar = confirm('¿Desea ingresar otro valor?');
  } while (continuar);
}

valor()


