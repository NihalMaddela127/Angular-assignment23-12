import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/postservice.service';
import { CommentComponent } from './comments/comments.component';
import { CommentService } from './comments/commentservice.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostsComponent],
  providers: [PostService, CommentService]
})
export class ServicesModule { }
