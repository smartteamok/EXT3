// Pruebas rápidas — esto NO se compila cuando la carpeta se usa como extensión.
if (bloques.sueloLogico(bloques.suelo(SabanaPuerto.P0), bloques.SabanaEstadoSuelo.Seco)) {
    bloques.led(bloques.SabanaEstadoOnOff.ON, SabanaPuerto.P1)
    bloques.robitLedRgb(0xff0000)
}
bloques.robitMostrarCadena("HOLA", bloques.SabanaVelocidadCadena.Lenta)
if (bloques.ultrasonidoRgbLogico(bloques.ultrasonidoRgb(), bloques.SabanaSiNo.Si)) {
    bloques.robitGirar(bloques.SabanaRobitGiro.Derecha)
} else {
    bloques.robitMovimientoCm(bloques.SabanaAvanceRetroceso.Avanzar, 50, 10)
}
