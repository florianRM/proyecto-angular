import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, RouterLink } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    SidebarComponent,
    SearchBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatDialogModule
  ],
  exports: [
    SidebarComponent,
    SearchBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
