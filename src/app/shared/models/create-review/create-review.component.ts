import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  errors: any = [];
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
      },
      error: (errorRes: any) => {
        console.log(errorRes);
      },
    });
  }
}
