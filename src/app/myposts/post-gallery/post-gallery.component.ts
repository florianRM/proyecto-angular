import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Post } from 'src/interfaces/post';
import { UploadPostComponent } from '../upload-post/upload-post.component';
import { MypostService } from '../mypost.service';
import Swal from 'sweetalert2';
import { LikeService } from 'src/app/services/like.service';
import { Like } from 'src/interfaces/like';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/interfaces/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { CommentsDialogComponent } from 'src/app/shared/comments-dialog/comments-dialog.component';

@Component({
  selector: 'app-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.css']
})
export class PostGalleryComponent implements OnInit {

  @Input() posts: Post[] = [];
  likedPosts: Like[] = [];
  visibleComments: boolean = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private myPostService: MypostService, private likeService: LikeService, private router: Router, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.likeService.getLikes()
      .subscribe({
        next: res => this.likedPosts = res,
        error: err => this.router.navigate(['/error'])
      })
  }

  openDialogUpload(): void {
    this.dialog.open(UploadPostComponent, {
      disableClose: true
    });
  }

  openCommentDialog(postId: number): void {
    this.dialogService.open(CommentsDialogComponent, {
      data: {
        id: postId
      }
    })
  }

  openCommentsDialog(): void {
    this.visibleComments = !this.visibleComments;
  }

  deletePost(id: number): void {
    this.myPostService.deletePost(id)
      .subscribe({
        next: () => {
          Swal.fire({
            title: 'Delete post',
            icon: 'warning',
            text: 'Are you sure to delete this post?',
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'red'
          }).then(resp => {
            if (resp.isConfirmed) {
              Swal.fire({
                title: 'Successfully',
                text: 'The post has been deleted successfully',
                showCancelButton: true,
                showConfirmButton: false
              })
            }
          })
        }
      })
  }

  isLikedPost(id: number): boolean {
    let isLiked: boolean = false;
    if (this.likedPosts.length != 0) {
      this.likedPosts.find(element => {
        if (element.post.id == id) {
          isLiked = true;
        }
      })
    }
    return isLiked;
  }

  giveLike(post: Post): void {
    const like = {
      post: {
        id: post.id
      },
      user: ''
    }

    this.likeService.giveLike(like)
      .subscribe({
        next: res => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/myposts']);
          });
        },
        error: err => console.log(err)
      })
  }

  removeLike(post: Post): void {
    this.likeService.removeLike(post.id)
      .subscribe({
        next: res => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/myposts']);
          });
        }
      })
  }

}