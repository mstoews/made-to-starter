import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';

const routes: Route[] = [
  {
      path     : '',
      component: BlogComponent
  }
];


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
