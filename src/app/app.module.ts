import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersManagerComponent } from './servers-manager/servers-manager.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { TenTimes } from './Services/ten-times';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component' ;
import { StatusCommunicator } from './Services/status-communicator';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersManagerComponent,
    ServerComponent,
    StatusMonitorComponent,
    UsersComponent,
    UserComponent,
    UserEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TenTimes, StatusCommunicator],
  bootstrap: [AppComponent]
})
export class AppModule { }
