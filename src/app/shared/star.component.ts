import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 5;
  cropWidth = 75;
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
