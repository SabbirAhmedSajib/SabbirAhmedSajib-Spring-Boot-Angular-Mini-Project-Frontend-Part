import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerReleaseUpdateOrGetComponent } from './drawer-release-update-or-get/drawer-release-update-or-get.component';
import { DrawerReleaseComponent } from './drawer-release/drawer-release.component';

const routes: Routes = [
  {path: '', component: DrawerReleaseComponent},
  {path: 'update', component: DrawerReleaseUpdateOrGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
