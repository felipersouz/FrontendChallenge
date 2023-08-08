import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { TournamentRegistrationComponent } from './tournament-registration/tournament-registration.component';
import { TeamModalComponent } from './tournament-registration/components/team-modal/team-modal.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TournamentRegistrationComponent,
    TeamModalComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent, TeamModalComponent],
})
export class FeaturesModule {}
