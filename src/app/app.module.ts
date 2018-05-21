import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule} from 'ngx-toastr'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//firebase 
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import {} from '../environments/environment'
import { environment } from '../environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

// services

import { ProductService } from './services/product.service'
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
