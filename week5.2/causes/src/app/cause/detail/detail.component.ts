import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from 'src/app/cause/causes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  @Input() selectedCause2: ICause;

  isRouteComponent = false;

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }

  get selectedCause() { return this.causesService.selectedCause; }

  constructor(
    private causesService: CausesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetchCause;
  }

  ngOnInit() {
    if (this.isRouteComponent) {
      this.causesService.load(this.activatedRoute.snapshot.params.id).subscribe((cause: ICause) => {

      });
    }
  }

  makeDonationhandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causesService.load(this.selectedCause._id).subscribe(() => {
        this.amountInput.nativeElement.value = '';
      });
    });
  }
}
