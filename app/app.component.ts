/* tslint:disable:max-line-length */

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import {
  TileLayoutComponent,
  TileLayoutReorderEvent,
  TileLayoutResizeEvent,
} from '@progress/kendo-angular-layout';

@Component({
  selector: 'my-app',
  template: `
    <kendo-tilelayout #tilelayout [columns]="4" [rowHeight]="160" [resizable]="true" [reorderable]="true" (reorder)="onReorder($event)" (resize)="onResize($event)">

    <ng-container *ngIf="homePageWidgets">

        <kendo-tilelayout-item *ngFor="let homePageWidget of homePageWidgets" id="widget-{{homePageWidget.Id}}" [order]="homePageWidget.Order"
            [col]="homePageWidget.Col" [colSpan]="homePageWidget.ColSpan" [row]="homePageWidget.Row" [rowSpan]="homePageWidget.RowSpan">
            <kendo-tilelayout-item-header>
                Header
            </kendo-tilelayout-item-header>
            <kendo-tilelayout-item-body>
                {{ homePageWidget | json }}
            </kendo-tilelayout-item-body>
        </kendo-tilelayout-item>

    </ng-container>

</kendo-tilelayout>
    `,
  styles: [],
})
export class AppComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

  @ViewChild('tilelayout', { static: true })
  tileLayoutComponent: TileLayoutComponent;

  public homePageWidgets: {
    Id: number;
    Col: number;
    ColSpan: number;
    Row: number;
    RowSpan: number;
  }[] = [];

  public ngOnInit(): void {
    this.homePageWidgets = [
      { Id: 1, Col: 1, ColSpan: 1, Row: 1, RowSpan: 2 },
      { Id: 2, Col: 2, ColSpan: 1, Row: 1, RowSpan: 2 },
      { Id: 3, Col: 3, ColSpan: 1, Row: 1, RowSpan: 2 },
      { Id: 4, Col: 4, ColSpan: 1, Row: 1, RowSpan: 2 },
      { Id: 5, Col: 1, ColSpan: 1, Row: 3, RowSpan: 2 },
      { Id: 6, Col: 2, ColSpan: 1, Row: 3, RowSpan: 2 },
      { Id: 7, Col: 3, ColSpan: 1, Row: 3, RowSpan: 2 },
      { Id: 8, Col: 4, ColSpan: 1, Row: 3, RowSpan: 2 },
    ];
  }

  onReorder(e: TileLayoutReorderEvent) {
    for (const item of this.tileLayoutComponent.items) {
      const widget = this.homePageWidgets.find(
        (w) => item.elem.nativeElement.id == `widget-${w.Id}`
      );
      widget.Col = Math.round(item.col);
      widget.Row = Math.round(item.row);
      widget.ColSpan = Math.round(item.colSpan);
      widget.RowSpan = Math.round(item.rowSpan);
    }
  }
  onResize(e: TileLayoutResizeEvent) {
    for (const item of this.tileLayoutComponent.items) {
      const widget = this.homePageWidgets.find(
        (w) => item.elem.nativeElement.id == `widget-${w.Id}`
      );
      widget.Col = Math.round(item.col);
      widget.Row = Math.round(item.row);
      widget.ColSpan = Math.round(item.colSpan);
      widget.RowSpan = Math.round(item.rowSpan);
    }
  }
}
