import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamModalComponent } from './components/team-modal/team-modal.component';

interface Team {
  name: string;
  players: string[];
}

@Component({
  selector: 'app-tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.scss'],
})
export class TournamentRegistrationComponent {
  teams_stage1: Team[] = [];
  selectedWinner: Team | null = null;
  selectedWinnerStage2: Team | null = null;
  teams_stage2: Team[] = [];
  winner: Team[] = [];

  constructor(private modalService: NgbModal) {}
  openAddTeamModal() {
    if (this.teams_stage1.length >= 4) {
      alert('Unable to register more teams');
      return;
    }

    const modalRef = this.modalService.open(TeamModalComponent, {
      centered: true,
      size: 'sm',
    });

    modalRef.result.then((newTeam: Team) => {
      if (newTeam) {
        this.teams_stage1.push(newTeam);
      }
    });
  }
  deleteTeam(index: number) {
    this.teams_stage1.splice(index, 1);
  }

  moveWinnerToStage2() {
    if (this.selectedWinner && this.teams_stage2.length < 2) {
      this.teams_stage2.push(this.selectedWinner);
      this.selectedWinner = null;
    }
  }
  moveToWinner() {
    if (this.selectedWinnerStage2) {
      this.winner.push(this.selectedWinnerStage2);
      this.selectedWinnerStage2 = null;
    }
  }
}
