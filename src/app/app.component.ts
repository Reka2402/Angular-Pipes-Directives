import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductPopupComponent } from './components/product-popup/product-popup.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgSelectModule,FormsModule,HeaderComponent,ProductComponent,ProductPopupComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AddtoCart';
}

