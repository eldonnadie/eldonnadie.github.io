import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TresDeTresComponent } from './components/tresdetres/tresdetres.component';
import { GuawappComponent } from './components/guawapp/guawapp.component';
import { WhittierComponent } from './components/whittier/whittier.component';
import { TIPythonAdapterComponent } from './components/ti-python-adapter/ti-python-adapter.component';
import { HolidayComponent } from './components/holidayinn/holidayinn.component';
import { EnergyManagementComponent } from './components/energy-management/energy-management.component';
import { BeautyTreeComponent } from './components/beauty-tree/beauty-tree.component';
import { IOTComponent } from './components/iot/iot.component';
import { TIInspireComponent } from './components/tiinspire/tiinspire';

const routes: Routes = [
  {path:'', component: WorkComponent},
  {path:'work', component: WorkComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'work/3de3', component: TresDeTresComponent},
  {path:'work/whittier', component: WhittierComponent},
  {path:'work/holiday', component: HolidayComponent},
  {path:'work/guawapp', component: GuawappComponent},
  {path:'work/ti-python-adapter', component: TIPythonAdapterComponent},
  {path:'work/energy-management', component: EnergyManagementComponent},
  {path:'work/beauty-tree', component: BeautyTreeComponent},
  {path:'work/iot', component: IOTComponent},
  {path:'work/tiinspire', component: TIInspireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
