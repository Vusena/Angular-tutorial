import { Component, EventEmitter, Input, OnChanges, Output, } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnChanges {
@Input() rating:number=0;
cropWidth:number=75;
@Output() ratingClicked:EventEmitter<string>=
new EventEmitter<string>();

ngOnChanges(): void {
  this.cropWidth=this.rating*75/5;
}
onClick():void{
this.ratingClicked.emit('The rating ${this.rating} was clicked')
}

}


