import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamKey, QueryParamKey } from './app-routing.enum';

const routes: Routes = [
  {
    path: ParamKey.firstPage,
    loadChildren: () =>
      import('./pages/first-page/first-page.module').then(
        (module) => module.FirstPageModule
      ),
  },
  {
    path: ParamKey.secondPage,
    loadChildren: () =>
      import('./pages/second-page/second-page.module').then(
        (module) => module.SecondPageModule
      ),
  },
  { path: ParamKey.notFound, redirectTo: QueryParamKey.redirectTo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
