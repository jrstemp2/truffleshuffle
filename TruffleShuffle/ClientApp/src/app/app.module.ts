import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { WeightRecordComponent } from './weight-record/weight-record.component';
import { NewWeightComponent } from './new-weight/new-weight.component';
import { WeightRecordsListComponent } from './weight-records-list/weight-records-list.component';


import { UserService } from './services/user.service';
import { WeightService } from './services/weight.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UserComponent,
    WeightRecordComponent,
    NewWeightComponent,
    WeightRecordsListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserComponent, pathMatch: 'full' },
      
    ])
  ],
  providers: [UserService, WeightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
