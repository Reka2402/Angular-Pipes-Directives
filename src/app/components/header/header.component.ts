import { Component, EventEmitter, Output } from '@angular/core';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { ProductComponent } from '../product/product.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductComponent,NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  public products:any = [];
  public qty:number = 1;
  public total:number = 0;
  constructor(){

  }

  public receiveProduct(product:any){
    const isAdded = this.products.some((productItem: any) => productItem.id === product.id);
    if(isAdded){
      window.alert("item already added")
    }else{
      product['qty'] = 1;
      product['total'] = product.price;
      this.products.push(product);
      this.totalPriceOfCheckout();
    }
  }
  private totalPriceOfCheckout(){
    this.total = 0;
    this.products.forEach((product:any) => {
      this.total = this.total + product.total;
    })
  }
  
  
  
  

  

}
