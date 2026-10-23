namespace bloques {
    /**
     * Velocidad de scroll de la matriz. El valor es el intervalo de
     * basic.showString, en milisegundos entre cada paso: menor número,
     * más rápido. 150 es la velocidad del bloque básico "mostrar cadena";
     * 50 es el ejemplo rápido de esa API.
     */
    export enum SabanaVelocidadCadena {
        //% block="slow"
        Lenta = 150,
        //% block="fast"
        Rapida = 50,
    }

    /**
     * Muestra una cadena en la matriz de LEDs, igual que "mostrar cadena".
     * "HOLA" ocupa más de un carácter, así que se desplaza. Una sola letra
     * se queda fija. El texto en inglés es el del editor en inglés;
     * español y portugués están en _locales/.
     */
    //% blockId=robit_mostrar_cadena
    //% block="ROBIT │ Show string %texto with speed %velocidad"
    //% texto.defl="HOLA"
    //% group="SCREENS" color="#9C27B0" weight=100 blockGap=8
    //% async
    export function robitMostrarCadena(texto: string, velocidad: SabanaVelocidadCadena): void {
        basic.showString(texto, velocidad)
    }
}
