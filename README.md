# EXT3

Extensión de MakeCode para micro:bit. Subconjunto de **STV2-PADRE** con
solo los bloques necesarios para esta actividad.

**Versión actual: 3.3.0**

## Cómo agregarla en MakeCode

1. Abrir [makecode.microbit.org](https://makecode.microbit.org/) y crear un **proyecto nuevo**.
2. Ir a **Extensiones** (engranaje ⚙️ → Extensiones).
3. Pegar la URL **https://github.com/smartteamok/EXT3** y elegirla.

> Si un proyecto ya tenía EXT3 agregada de antes, queda fijado a la versión
> vieja. Para ver la versión nueva: quitar la extensión y volver a
> agregarla, o crear un proyecto nuevo.
>
> No usar EXT3 junto con STV2-PADRE en el mismo proyecto: ambas usan el
> mismo namespace (`bloques`) y chocan.

## Cómo se ve en MakeCode

Una sola categoría padre **SmartTEAM 3** (violeta `#9C27B0`, icono de
cubos, igual que EXT7). Al hacer clic,
aparecen las subcategorías (groups) con sus bloques.

## Bloques

| Subcategoría | Bloque | Color |
|--------------|--------|-------|
| SENSORES     | (ROBIT │ Ultrasonido) detecta objeto: Si / No — 3 a 25 cm | `#9C27B0` |
| SENSORES     | (Sensor de Suelo) está seco / húmedo — seco < 400, húmedo ≥ 400 | `#006970` |
| SALIDAS      | ROBIT luces RGB │ color (paleta) | `#9C27B0` |
| SALIDAS      | ROBIT luces RGB │ apagar | `#9C27B0` |
| SALIDAS      | LED │ Estado ON/OFF en pin P | `#FFB800` |
| MOVIMIENTO   | ROBIT Avanzar / Retroceder │ Velocidad 0-100 por 0-50 cm | `#9C27B0` |
| MOVIMIENTO   | ROBIT │ Girar 90º a la ↺ Izquierda / ↻ Derecha (velocidad 50) | `#9C27B0` |
| PANTALLAS    | ROBIT │ Mostrar cadena [HOLA] con velocidad lenta / rápida | `#9C27B0` |

Los bloques redondos "ROBIT │ Ultrasonido" y "Sensor de
Suelo │ en pin P" no aparecen sueltos en el toolbox; solo van encajados
dentro de su hexágono.

## Hardware (I2C)

| Componente | Dirección |
|------------|-----------|
| Chasis Robit (motores y LED RGB) | `0x09` |
| Ultrasonido RGB | `0x57` |

Programación de los bloques Robit tomada de
[logos-smart](https://github.com/sunyong6666/logos-smart).

## Historial

| Versión | Cambios |
|---------|---------|
| 3.3.0 | ROBIT luces RGB │ apagar, debajo del bloque de color. |
| 3.2.0 | PANTALLAS: ROBIT mostrar cadena, con velocidad lenta/rápida (inglés, español y portugués). Girar pasa a "Girar 90º a la". |
| 3.1.0 | Nueva versión para forzar la actualización en MakeCode (mismos bloques que 2.4.0). |
| 2.4.0 | "Robit" pasa a "ROBIT". Ultrasonido: "(ROBIT │ Ultrasonido) detecta objeto: Si/No". LED: "ROBIT luces RGB │ color". Se quita ROBIT Frenar. |
| 2.3.0 | README con instrucciones de instalación y hardware. |
| 2.2.0 | Bloques Robit (Ultrasonido RGB, LED RGB, Avanzar/Retroceder cm, Girar, Frenar). Se quitan Ultrasonido, Sensor de Suelo suelto y Movimiento simple. |
