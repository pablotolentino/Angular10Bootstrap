import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './shared/preview/preview.component';

const routes: Routes = [{
  path: 'shared',
  loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
},{

  path:'preview',
  component:PreviewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
