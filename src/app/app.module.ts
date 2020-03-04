import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BillingsComponent } from './billings/billings.component';
import { LoginService } from './services/login.service';
import { BillingService } from './services/billing.service';

const routes= [
  {path: '', component: LoginComponent},
  {path: 'billings', component: BillingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BillingsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, BillingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
