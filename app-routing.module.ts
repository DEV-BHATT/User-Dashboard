import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgetComponent } from './component/forget/forget.component';
import { NotFoundpageComponent } from './component/not-foundpage/not-foundpage.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'',redirectTo:'/login',pathMatch:"full"},
  // {path:'**',component:NotFoundpageComponent},
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren :() =>
     import('./modules/admin/admin.module').then((m)=> m.AdminModule),

  },
  {
    path:'user',
    // canActivate:[AuthGuard],
    loadChildren :() =>
     import('./modules/user/user.module').then((m)=> m. UserModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
