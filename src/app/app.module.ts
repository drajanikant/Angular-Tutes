import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { SortPipe } from './sort.pipe';
import { SortDemoComponent } from './sort-demo/sort-demo.component';
import { FormTempleteComponent } from './form-templete/form-templete.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    SortPipe,
    SortDemoComponent,
    FormTempleteComponent,
    ModelFormComponent,
    BaseConverterComponent
  ],
  imports: [
    BrowserModule,
   
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'members',
        component : MembersComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'pipe',
        component: SortDemoComponent
      },
      {
        path:'', // for the default component route
        component: MyComponentComponent,
        pathMatch: 'full'
      },
      {
        path:'templete-form', 
        component: FormTempleteComponent,
      },
      {
        path:'model-form',
        component: ModelFormComponent,
      },
      {
        path:'base-converter',
        component: BaseConverterComponent,
      }
      ]),
      ReactiveFormsModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
