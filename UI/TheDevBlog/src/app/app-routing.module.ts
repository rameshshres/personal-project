import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component: PostsComponent
  },
  {
    path:'my-portfolio',
    component: MyPortfolioComponent
  },
  {
    path:'post/:id',
    component: PostComponent
  },
  {
    path : 'admin/posts',
    component : AdminPostsComponent
  },
  {
    path: 'admin/posts/add',
    component: AdminAddPostComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
