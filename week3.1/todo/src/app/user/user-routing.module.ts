import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user.resolver';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    resolve: {
      userList: UserResolver,
    },
    component: ListComponent
  },
  {
    path: ':id',
    component: UserComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
