import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';

import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './product-form/product-form.component';

import{ ProductService } from 'src/app/shared/service/product.service';
import { ShoppingService } from 'src/app/shared/services/shopping.services';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductFormComponent,
    ShoppingListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
