import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Output() addReview = new EventEmitter<any>();

  errors: string[] = [];
  id: any = null;

  reviewFormGroup = new FormGroup({
    comment: new FormControl(''),
  });
  constructor(
    private reviewService: ReviewService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      console.log('PARAMS', params);
      this.id = params.id;
    });
  }

  onSubmit() {
    const newReview = this.reviewFormGroup.value;

    this.reviewService.createReview(newReview, this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.closeBtn.nativeElement.click();
        this.addReview.emit(res.payload.review);
      },
      error: (errorRes: any) => {
        this.errors.push(errorRes.error.errors); // Push error messages into the array
        console.log(errorRes);
      },
    });
  }
}
