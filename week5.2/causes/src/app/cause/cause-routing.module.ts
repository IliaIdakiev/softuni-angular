import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'cause',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cause/create'
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        canActivate: [AuthGuard],
        data: {
          shouldFetchCause: true,
          isLogged: true
        }
      }
    ]
  }
];

export const CauseRoutingModule = RouterModule.forChild(routes);
