import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FormsModule,NgSelectModule,NgClass,NgFor,NgIf],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.css'
})
export class ProductPopupComponent implements OnInit {
  @Input() product:any = null;
  public selectedImage:any;
  public selectedMaterial:any;
  public selectedColor:any;
  constructor(){
   
  }

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.selectedImage = this.product.images[0];
    this.selectedColor = this.product.colors[0].id;
    this.selectedMaterial = this.product.materials[0].id;

  }
}
  


