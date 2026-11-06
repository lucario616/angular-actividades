import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
})
export class InventarioComponent {
  readonly productos = signal<Producto[]>([
    { id: 1, nombre: 'Teclado', precio: 25000, stock: 8 },
    { id: 2, nombre: 'Mouse', precio: 15000, stock: 12 },
    { id: 3, nombre: 'Monitor', precio: 180000, stock: 4 },
    { id: 4, nombre: 'Auriculares', precio: 32000, stock: 6 },
  ]);

  readonly filtro = signal('');

  readonly productosFiltrados = computed(() => {
    const texto = this.filtro().trim().toLocaleLowerCase();
    return this.productos().filter((producto) =>
      producto.nombre.toLocaleLowerCase().includes(texto)
    );
  });

  readonly valorTotalInventario = computed(() =>
    this.productos().reduce(
      (total, producto) => total + producto.precio * producto.stock,
      0
    )
  );

  constructor() {
    effect(() => {
      const cantidad = this.productos().length;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cantidadProductosInventario', String(cantidad));
      }
    });
  }

  actualizarFiltro(event: Event): void {
    this.filtro.set((event.target as HTMLInputElement).value);
  }

  reducirStock(id: number): void {
    this.productos.update((productos) =>
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, stock: Math.max(0, producto.stock - 1) }
          : producto
      )
    );
  }
}
