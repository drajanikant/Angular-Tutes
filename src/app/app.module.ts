import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { SortDemoComponent } from './sort-demo/sort-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    SortPipe,
    SortDemoComponent
  ],
  imports: [
    BrowserModule,
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
      }
      ]),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
