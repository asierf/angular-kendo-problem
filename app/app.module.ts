import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { UploadModule } from '@progress/kendo-angular-upload';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { MenusModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DialogsModule,
    WindowModule,
    DropDownsModule,
    ButtonsModule,
    GridModule,
    InputsModule,
    ExcelModule,
    TreeViewModule,
    DateInputsModule,
    LabelModule,
    UploadModule,
    TooltipModule,
    SortableModule,
    MenusModule,
    LayoutModule,
    ScrollViewModule,
    ProgressBarModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
