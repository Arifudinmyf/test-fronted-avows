import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedInputModule } from 'src/shared/shared-input/shared-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthInterceptor } from 'src/@core/helper/basic-auth.interceptor';
import { ErrorInterceptor } from 'src/@core/helper/error.interceptor';
import { fakeBackendProvider } from 'src/@core/helper/fake-backend';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
})
export class LoginModule { }
