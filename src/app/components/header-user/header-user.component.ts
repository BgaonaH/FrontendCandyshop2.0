import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {
  searchQuery: string = ''; 
  constructor(
    private productService: ProductService,
     private router: Router) {} onSearch() {
      if (this.searchQuery.trim()) { 
        this.productService.searchProducts(this.searchQuery).subscribe(products => { 
          if (products.length > 0) { 
            const productId = products[0].id; // Redirigir al primer producto encontrado 
            this.router.navigate(['/product', productId]);
           } else { console.log('Producto no encontrado'); } }); } 
          } 
}
