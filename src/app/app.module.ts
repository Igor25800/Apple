import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { NavHoverComponent } from './components/nav-hover/nav-hover.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
     



import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component'




import { AngularFireModule } from '@angular/fire';
import {  AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { loader } from './shared/config/loader.config';
import { AdminNavsComponent } from './admin/admin-category/admin-navs/admin-navs.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ColorPipe } from './shared/pipes/color.pipe';
import { LenghtNumverPipe } from './shared/pipes/lenght-numver.pipe';
import { AppleComponent } from './pages/apple/apple.component';
import { ReplacementPipe } from './shared/pipes/replacement.pipe';
import { NavigateComponent } from './components/navigate/navigate.component';
import { FilterProductsPipe } from './shared/pipes/filter-products.pipe';
import { BasketComponent } from './pages/basket/basket.component';
import { ModalBasketComponent } from './components/modal-basket/modal-basket.component';
import { AppleDetailsComponent } from './pages/apple-details/apple-details.component';
import { AdminDetaliComponent } from './admin/admin-detali/admin-detali.component';
import { MemoryPipe } from './shared/pipes/memory.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { NameStringPipe } from './shared/pipes/name-string.pipe';
import { KyrsPipe } from './shared/pipes/kyrs.pipe';
import { FixedPipe } from './shared/pipes/fixed.pipe';
import { RoutingPipe } from './shared/pipes/routing.pipe';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { ArrPipe } from './shared/pipes/arr.pipe';
import { ModalProductsComponent } from './admin/admin-products/modal-products/modal-products.component';
import { DevicePropertiesComponent } from './components/device-properties/device-properties.component';
import { ObjectPipe } from './shared/pipes/object.pipe';

import { DescriptionComponent } from './admin/admin-detali/description/description.component';

import { FilterComponent } from './components/filter/filter.component';



import { CarouselModule } from 'ngx-owl-carousel-o';


import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import 'hammerjs';
import { AdminCaruselComponent } from './admin/admin-carusel/admin-carusel.component';
import { CaruselComponent } from './pages/home/carusel/carusel.component';
import { ModelsAppleComponent } from './pages/home/models-apple/models-apple.component'



import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { GalleryIvyboxComponent } from './pages/gallery-ivybox/gallery-ivybox.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortTextComponent } from './pages/home/short-text/short-text.component'

import {SliderModule} from 'primeng/slider';
import { MapsComponent } from './components/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ValuePipe } from './shared/pipes/value.pipe';
import { AdminCommentsComponent } from './admin/admin-comments/admin-comments.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { MapsNovaComponent } from './components/maps-nova/maps-nova.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHoverComponent,
    HomeComponent,
    CategoryComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminNavsComponent,
    FilterPipe,
    ColorPipe,
    LenghtNumverPipe,
    AppleComponent,
    ReplacementPipe,
    NavigateComponent,
    FilterProductsPipe,
    BasketComponent,
    ModalBasketComponent,
    AppleDetailsComponent,
    AdminDetaliComponent,
    MemoryPipe,
    SortPipe,
    NameStringPipe,
    KyrsPipe,
    FixedPipe,
    RoutingPipe,
    AdminOrderComponent,
    ArrPipe,
    ModalProductsComponent,
    DevicePropertiesComponent,
    ObjectPipe,
    FilterComponent,
    DescriptionComponent,
    AdminCaruselComponent,
    CaruselComponent,
    ModelsAppleComponent,
    GalleryComponent,
    AdminGalleryComponent,
    GalleryIvyboxComponent,
    FooterComponent,
    ShortTextComponent,
    MapsComponent,
    ValuePipe,
    AdminCommentsComponent,
    SubscribeComponent,
    MapsNovaComponent,
    LoginModalComponent,
    
 
       
    
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatTabsModule,
    [SwiperModule],
    MatTableModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatInputModule,
    MatProgressBarModule,
    MatFileUploadModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    NgxUiLoaderModule.forRoot(loader),
    NgxUiLoaderRouterModule,
    MatExpansionModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDialogModule,
    CarouselModule,
    NgxHmCarouselModule,
    [CrystalLightboxModule],
    SliderModule,
    GoogleMapsModule,
    MatProgressSpinnerModule

   
  
    
  
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
