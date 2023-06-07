import { Component, OnInit,OnDestroy} from '@angular/core';
import { IProduct } from './product';
import { ProductSevice } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor( private productService: ProductSevice) {}
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage = '';
  sub!: Subscription;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {

        this.products = products;
        console.log(this.products);
        
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  
ngOnDestroy(): void {
  this.sub.unsubscribe();
}
  
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }

}