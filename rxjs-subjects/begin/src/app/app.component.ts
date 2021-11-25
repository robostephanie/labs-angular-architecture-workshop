import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubjectsService } from './core/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription1Data = [];
  subscription2Data = [];
  subscription3Data = [];

  private sub1 = new Subscription();
  private sub2 = new Subscription();
  private sub3 = new Subscription();

  constructor(
    private readonly subjectsService: SubjectsService
  ) {}

  ngOnInit() {}

  public ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

  subscribe1() {
    this.sub1 = this.subjectsService.observable$.subscribe(data => this.subscription1Data.push(data));
  }

  subscribe2() {
    this.sub2 = this.subjectsService.observable$.subscribe(data => this.subscription2Data.push(data));
  }

  subscribe3() {
    this.sub3 = this.subjectsService.observable$.subscribe(data => this.subscription3Data.push(data));
  }
}
