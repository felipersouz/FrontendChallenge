import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from '../../interfaces/tournament-data';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.scss'],
})
export class TeamModalComponent {
  teamForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      players: this.formBuilder.array(
        Array(5)
          .fill('')
          .map(() => ['', Validators.required])
      ),
    });
  }

  get playerControls(): FormArray {
    return this.teamForm.get('players') as FormArray;
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const newTeam: Team = this.teamForm.value;
      this.activeModal.close(newTeam);
    }
  }
}
