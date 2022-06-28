import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = 'Products';
  imgWidth = 50;
  imgMargin = 2;
  showImg = false;
  private _listFilter = '';
  constructor(private productService: ProductService) {}

  products: Product[] = [];
  filteredAns: Product[] = this.products;
  toggleImg(): void {
    this.showImg = !this.showImg;
  }
  get listFilter(): string {
    return this._listFilter;
    console.log('in getter');
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAns = this.productFilter(value);
    console.log('in setter');
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredAns = this.products;
    this.listFilter = '';
  }

  productFilter(value: string): Product[] {
    value = value.toLowerCase();
    return this.products.filter((prod: Product) =>
      prod.productName.toLowerCase().includes(value)
    );
    return this.filteredAns;
  }
}
