import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  errors: any = [];

  reviewFormGroup = new FormGroup({
    comment: new FormControl(''),
  });
  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {}

  onSubmit() {
    const newReview = this.reviewFormGroup.value;

    this.reviewService.createReview(newReview).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (errorRes: any) => {
        console.log(errorRes);
      },
    });
  }
}
