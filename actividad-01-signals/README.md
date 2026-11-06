# Actividad 01 — Angular Signals

Componente standalone de inventario realizado con Angular 20.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Ejecución

```bash
npm install
npm start
```

Abrir http://localhost:4200

## Compilación

```bash
npm run build
```

## Consignas cumplidas

1. `productos` y `filtro` con `signal()`.
2. `productosFiltrados` y `valorTotalInventario` con `computed()`.
3. `effect()` en constructor que persiste `cantidadProductosInventario` en `localStorage`.
4. `@for`, valor total y botón que reduce el stock por `update()` inmutable.

Se evita disminuir el stock por debajo de cero. El efecto guarda la **cantidad de productos distintos** (`productos().length`), tal como solicita la consigna, no la suma de unidades de stock.

> El código se preparó para Angular 20. La instalación y compilación deben ejecutarse en un equipo con acceso a npm.
