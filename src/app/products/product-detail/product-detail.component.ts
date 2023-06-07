import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductSevice } from '../product.service';

@Component({
 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
pageTitle:string='Product Detail';
errorMessage = '';
product:IProduct|undefined;

constructor(private route:ActivatedRoute,
            private router: Router,
           ){
              
            }

ngOnInit(): void {
  const id=Number(this.route.snapshot.paramMap.get('id'));
  if (id) {
  this.pageTitle +=`:${id}`;
}
}

onBack(): void {
  this.router.navigate(['/products']);
}
}