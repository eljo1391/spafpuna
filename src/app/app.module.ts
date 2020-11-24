
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriaComponent } from './components/parametricos/categoria/categoria.component';
import { CategoriaEditComponent } from './components/parametricos/categoria/categoria-edit.component';
import { CategoriaListarComponent } from './components/parametricos/categoria/categoria-listar.component';
import { MediosPagoComponent } from './components/parametricos/medios-pago/medios-pago.component';
import { MediosPagoEditComponent } from './components/parametricos/medios-pago/medios-pago-edit.component';
import { MediosPagoListarComponent } from './components/parametricos/medios-pago/medios-pago-listar.component';
import { ClienteEditComponent } from './components/parametricos/cliente/cliente-edit.component';
import { ClienteListarComponent } from './components/parametricos/cliente/cliente-listar.component';
import { ProductoComponent } from './components/parametricos/producto/producto.component';
import { ProductoEditComponent } from './components/parametricos/producto/producto-edit.component';
import { ProductoListarComponent } from './components/parametricos/producto/producto-listar.component';
import { ProductoListar2Component } from './components/parametricos/producto/producto-listar2.component';
import { ReservaComponent } from './components/parametricos/reserva/reserva.component';
import { ReservEditComponent } from './components/parametricos/reserva/reserv-edit.component';
import { ReservaListComponent } from './components/parametricos/reserva/reserva-list.component';
import { ServicioComponent } from './components/parametricos/servicio/servicio.component';
import { ServicioListarComponent } from './components/parametricos/servicio/servicio-listar.component';
import { ServicioEditComponent } from './components/parametricos/servicio/servicio-edit.component';
import { EmpleadoComponent } from './components/parametricos/empleado/empleado.component';
import { EmpleadoEditComponent } from './components/parametricos/empleado/empleado-edit.component';
import { EmpleadoListarComponent } from './components/parametricos/empleado/empleado-listar.component';

import { CategoriaListar2Component } from './components/parametricos/booking/categoria-listar2.component';
import { ServicioListar2Component } from './components/parametricos/booking/servicios-spa.component';
import { PlanillaComponent } from './components/parametricos/planilla/planilla.component';
import { HorarioAsignarComponent } from './components/parametricos/horario/horario-asignar.component';
import { TerapistaComponent } from './components/parametricos/booking/terapista.component';
import { CalendarComponent } from './components/parametricos/booking/calendar.component';

// import { CategoriaListar2Component } from './components/parametricos/categoria/categoria-listar2.component';
// import { ServicioListar2Component } from './components/parametricos/servicio/servicio-listar2.component';
import { ProveedorComponent } from './components/parametricos/proveedor/proveedor.component';
import { ProveedorEditComponent } from './components/parametricos/proveedor/proveedor-edit.component';
import { CompraComponent } from './components/parametricos/compra/compra.component';
import { DetallesCompraComponent } from './components/parametricos/detalles-compra/detalles-compra.component';
import { CompraEditComponent } from './components/parametricos/compra/compra-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    MediosPagoComponent,
    MediosPagoEditComponent,
    CategoriaListarComponent,
    MediosPagoListarComponent,
    ProductoComponent,
    ClienteEditComponent,
    ClienteListarComponent,
    ProductoEditComponent,
    ProductoListarComponent,
    ReservaComponent,
    ReservEditComponent,
    ReservaListComponent,
    ServicioComponent,
    ServicioListarComponent,
    ServicioEditComponent,
    EmpleadoComponent,
    EmpleadoEditComponent,
    EmpleadoListarComponent,
    CategoriaListar2Component,
    ProductoListar2Component,
    ServicioListar2Component,

    EmpleadoComponent,
    PlanillaComponent,
    HorarioAsignarComponent,
    TerapistaComponent,
    CalendarComponent,

    ProveedorComponent,
    ProveedorEditComponent,
    CompraComponent,
    DetallesCompraComponent,
    CompraEditComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
