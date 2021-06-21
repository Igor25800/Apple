import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCaruselComponent } from './admin/admin-carusel/admin-carusel.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { AdminDetaliComponent } from './admin/admin-detali/admin-detali.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';
import { AppleDetailsComponent } from './pages/apple-details/apple-details.component';
import { BasketComponent } from './pages/basket/basket.component';

import { CategoryComponent } from './pages/category/category.component';
import { GalleryIvyboxComponent } from './pages/gallery-ivybox/gallery-ivybox.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginGuard } from './shared/guards/login.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component : HomeComponent },
  { path: 'basket', component : BasketComponent },
  { path: 'galleryUser', component : GalleryIvyboxComponent },
  { path: 'category/:category' , component: CategoryComponent},
  { path: 'category/:category/:apple' , component: CategoryComponent},
  { path: 'category/:category/:apple/:id' , component: AppleDetailsComponent},
  { path: 'admin', component : AdminComponent , canActivate:[LoginGuard] ,children : [
    { path: '', pathMatch: 'full', redirectTo: 'category'},
    { path: 'category' , component : AdminCategoryComponent},
    { path: 'comments' , component : AdminCommentsComponent},
    { path: 'carusel' , component : AdminCaruselComponent},
    { path: 'gallery' , component : AdminGalleryComponent},
    { path: 'products' , component : AdminProductsComponent},
    { path: 'detali' , component : AdminDetaliComponent},
    { path: 'order' , component : AdminOrderComponent},
   
  ] },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
