import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService
  ) { }

  ngOnInit() {
    this.widgets$ = this.widgetsService.widgets$;
    this.widgetsService.loadWidgets();
  }

  resetWidget() {
    const emptyWidget: Widget = { id: null, name: '', description: '', user: undefined };
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    this.widgetsService.saveWidgets(widget);
    this.resetWidget();
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget);
    this.resetWidget();
  }

}
