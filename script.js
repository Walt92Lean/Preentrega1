
/*Le damos la opción de compra al Usuario */

let CodigoProducto = parseInt(prompt('Por favor Ingresa el código del Producto que deseas comprar\n1-Amigurumis, precio NETO $100\n2-Sonajeros, precio NETO $50\n3-Cuaderno Pediátrico, precio NETO $70\n4-Mate con Funda y Bombilla, precio NETO $150\n0-Terminar la Compra'));
let total = 0;

/* Estas constantes vamos a aplicar luego al Precio Neto del Producto mediante una Función */
const IVA = 0.21;
const DESCUENTO = 0.1;
const RECARGO = 0.15;

/* Utilizamos un While para que si el Usuario no pone ninguna de las opciones correctas, el ciclo vuelva a darle la opción de Elegir*/
while (CodigoProducto != 0) {
    switch (CodigoProducto) {
        case 1:
            total += 100;
            alert('Elegiste Amigurumis, Total NETO $' + total);
            break;
        case 2:
            total += 50;
            alert('Elegiste Sonajeros, Total NETO $' + total);
            break;
        case 3:
            total += 70;
            alert('Elegiste Cuaderno Pediátrico, Total NETO $' + total);
            break;
        case 4:
            total += 150;
            alert('Elegiste Mate con Funda y Bombilla, Total NETO $' + total);
            break;
        default:
            alert('El Código Ingresado es Incorrecto');
            break;
    }

    CodigoProducto = parseInt(prompt('Por favor Ingresa el código del Producto que deseas comprar\n1-Amigurumis, precio NETO $100\n2-Sonajeros, precio NETO $50\n3-Cuaderno Pediátrico, precio NETO $70\n4-Mate con Funda y Bombilla, precio NETO $150\n0-Terminar la Compra'));
}


/*Aplicamos otro while para la opción de forma de pago*/
if (total != 0) {
    let MododePago = parseInt(prompt('Como deseas abonar?\n1-Efectivo (10% de Descuento)\n2-Tarjeta de Débito\n3-Tarjeta de Crédito (hasta en 6 cuotas fijas)\n0-Salir'));
    while (MododePago != 0) {

        if (MododePago == 1) {
            alert('Total a pagar con IVA + Descuentos $' + aplicarImpuestosyDescuentos(IVA, DESCUENTO));
        }
        else if (MododePago == 2) {
            alert('Total a pagar con IVA $' + aplicarImpuestosyDescuentos(IVA, 0));
        }
        else if (MododePago == 3) {
            alert('Total a pagar con IVA + Recargo en Cuotas $' + aplicarImpuestosyDescuentos(IVA + RECARGO, 0));
        }
        else {
            alert('Opción Invalida')
        }
        MododePago = parseInt(prompt('Como deseas abonar?\n1-Efectivo (10% de Descuento)\n2-Tarjeta de Débito\n3-Tarjeta de Crédito (hasta en 6 cuotas fijas)\n0-Salir'));
    }
}

else {
    alert('¡Hasta luego!')
}


/* Función que dependiendo del tipo de pago, se aumenta el IVA(en los 3 casos), se aplica descuento (Efectivo) y se aplica recargo (Crédito)*/

function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos)
    let totalConImpuestosyDescuentos;
    if (descuentos != 0) {
        totalConImpuestosyDescuentos = totalConImpuestos * (1 - descuentos);
    }
    else {
        totalConImpuestosyDescuentos = totalConImpuestos;
    }
    return totalConImpuestosyDescuentos;
}
