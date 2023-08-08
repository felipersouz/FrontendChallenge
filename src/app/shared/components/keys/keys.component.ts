import { Component, Input } from '@angular/core';
import { Team } from 'src/app/features/tournament-registration/interfaces/tournament-data';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss'],
})
export class KeysComponent {
  @Input() teams_stage1: Team[] = [];
  @Input() teams_stage2: Team[] = [];

  get teamPairs(): Team[][] {
    const pairs: Team[][] = [];
    for (let i = 0; i < this.teams_stage1.length; i += 2) {
      pairs.push([this.teams_stage1[i], this.teams_stage1[i + 1]]);
    }
    return pairs;
  }

  deleteTeam(index: number) {
    this.teams_stage1.splice(index, 1);
  }
}
