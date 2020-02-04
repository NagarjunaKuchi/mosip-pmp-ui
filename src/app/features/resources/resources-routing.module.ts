import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'misp', pathMatch: 'full' },  
  { path: 'misp', loadChildren: () => import('../resources/misp/misp.module').then(m => m.MispModule) },
  { path: 'policy', loadChildren: () => import('../resources/policy/policy.module').then(m => m.PolicyModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
