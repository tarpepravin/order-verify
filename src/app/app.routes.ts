import { Routes } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: "fetch-orders", component: FetchOrdersComponent},
  { path: "edit-order/:index", component: EditOrderComponent},
  { path: '',   redirectTo: '/fetch-orders', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
