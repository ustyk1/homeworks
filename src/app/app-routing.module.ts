import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from './pages/2023-02-27/graph/graph.component';
import { Hw_2023_02_27_Component } from './pages/2023-02-27/hw-2023-02-27.component';
import { Hw_2023_02_28_Component } from './pages/hw-2023-02-28/hw-2023-02-28.component';
import { UserCardComponent } from './pages/hw-2023-02-28/user-card/user-card.component';
import { Hw_2023_04_20_Component } from './pages/hw-2023-04-20/hw-2023-04-20.component';
import { SignInFromComponent } from './pages/hw-2023-04-20/components/sign-in-from/sign-in-from.component';
import { SignUpFromComponent } from './pages/hw-2023-04-20/components/sign-up-from/sign-up-from.component';
import { ResetPasswordFormComponent } from './pages/hw-2023-04-20/components/reset-password-form/reset-password-form.component';
import { ProfileComponent } from './pages/hw-2023-04-20/pages/profile/profile.component';
import { LoginComponent } from './pages/hw-2023-04-20/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'hw-2023-02-27', pathMatch: 'full' },
  { path: 'hw-2023-02-27', component: Hw_2023_02_27_Component,
    children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' },
      { path: 'graph',  component: GraphComponent },
    ]
  },
  { path: 'hw-2023-02-28', component: Hw_2023_02_28_Component,
    children: [
      { path: '', redirectTo: 'user-card', pathMatch: 'full' },
      { path: 'user-card',  component: UserCardComponent },
    ]
  },
  { path: 'hw-2023-04-20', component: Hw_2023_04_20_Component,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',  component: LoginComponent,
        children: [
          // {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
          {path: 'sign-up', component: SignUpFromComponent},
          {path: 'sign-in', component: SignInFromComponent},
          {path: 'reset-password', component: ResetPasswordFormComponent}
        ]
      },
      { path: 'profile',  component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
