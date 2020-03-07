import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'
import 'hammerjs'
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,

} from '@angular/material';
import { AppComponent } from './components/app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { SidenavService } from './services/sidenav.service';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { HoverContainerComponent } from './components/hover-container/hover-container.component'
import { ContactComponent } from './components/contact/contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TresDeTresComponent } from './components/tresdetres/tresdetres.component';
import { WhittierComponent } from './components/whittier/whittier.component';
import { GuawappComponent } from './components/guawapp/guawapp.component';
import { TIPythonAdapterComponent } from './components/ti-python-adapter/ti-python-adapter.component';
import { HolidayComponent } from './components/holidayinn/holidayinn.component';
import { EnergyManagementComponent } from './components/energy-management/energy-management.component';
import { BeautyTreeComponent } from './components/beauty-tree/beauty-tree.component';
import { IOTComponent } from './components/iot/iot.component';
import { TIInspireComponent } from './components/tiinspire/tiinspire';
import { ProjectMetadataComponent } from './components/project-metadata/project-metadata.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WorkComponent,
    HoverContainerComponent,
    AboutComponent,
    ContactComponent,
    TresDeTresComponent,
    WhittierComponent,
    GuawappComponent,
    TIPythonAdapterComponent,
    HolidayComponent,
    EnergyManagementComponent,
    BeautyTreeComponent,
    IOTComponent,
    TIInspireComponent,
    ProjectMetadataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatCardModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [SidenavService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
