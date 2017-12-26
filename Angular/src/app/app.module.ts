import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './services/posts/posts.component';
import { DashcompComponent } from './dashboard/dashcomp/dashcomp.component';
import { ServiceurlComponent } from './services/serviceurl/serviceurl.component';
import { ImageService } from './services/serviceurl/urlservice.service'
import { MyInterceptor } from './services/serviceurl/myinterceptor';
import { PostService } from './services/posts/postservice.service';
import { CommentService } from './services/comments/commentservice.service';
import { CommentComponent } from './services/comments/comments.component';
import { PaginationService } from './services/pagination.service';

@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    WelcomeComponent,
    PostsComponent,
    CommentComponent,
    ServiceurlComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'welcome', component : WelcomeComponent},
      {path:'albums', component : ServiceurlComponent},
      {path:'posts', component : PostsComponent},
      {path:'comments', component : CommentComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo: 'welcome', pathMatch:'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true} ,PaginationService, ImageService, PostService, CommentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
