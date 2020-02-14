import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CausesService } from '../causes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private causeService: CausesService,
    private router: Router
  ) {
    this.form = this.fb.group({
      cause: ['', [Validators.required]],
      neededAmount: [null, [Validators.required, Validators.min(10)]],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createCauseHandler() {
    this.causeService.create(this.form.value).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
