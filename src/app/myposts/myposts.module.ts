import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypostsRoutingModule } from './myposts-routing.module';
import { MypostComponent } from './mypost/mypost.component';
import { SharedModule } from '../shared/shared.module';
import { PostGalleryComponent } from './post-gallery/post-gallery.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { EditPostDialogComponent } from './edit-post-dialog/edit-post-dialog.component';

@NgModule({
  declarations: [
    MypostComponent,
    PostGalleryComponent,
    UploadPostComponent,
    EditPostDialogComponent
  ],
  imports: [
    CommonModule,
    MypostsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    DialogModule,
    TooltipModule
  ],
  providers: [
    DialogService
  ]
})
export class MypostsModule { }
