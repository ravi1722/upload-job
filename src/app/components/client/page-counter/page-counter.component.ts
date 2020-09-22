import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.css']
})
export class PageCounterComponent implements OnInit {

  constructor() { }
  @Input() width: number = 20;
  ngOnInit(): void {
  }

}
