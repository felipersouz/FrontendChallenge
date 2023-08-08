import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { TournamentRegistrationComponent } from './features/tournament-registration/tournament-registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: { title: 'Home' },
  },
  {
    path: 'tournament',
    component: TournamentRegistrationComponent,
    data: { title: 'New tournament' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
