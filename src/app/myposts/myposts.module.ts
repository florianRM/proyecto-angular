import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostsRoutingModule } from './myposts-routing.module';
import { MypostComponent } from './mypost/mypost.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PostGalleryComponent } from './post-gallery/post-gallery.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    MypostComponent,
    PostGalleryComponent,
    UploadPostComponent
  ],
  imports: [
    CommonModule,
    MypostsRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    DialogModule,
    TooltipModule
  ]
})
export class MypostsModule { }