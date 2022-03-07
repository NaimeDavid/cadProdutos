import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {ProductCrudComponent} from './components/product/product-crud/product-crud.component'
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

// objeto do tipo Routes
const routes: Routes = [{

   path: "",
   component:HomeComponent//primeira rota

},
{
  path:"products",//segunda rota
   component:ProductCrudComponent
},
{
  path:"products/create",
  component:ProductCreateComponent
},
  
{
    path:"products/update/:id",
     component:ProductUpdateComponent
  
},
  
{
    path:"products/delete/:id",
     component:ProductDeleteComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
