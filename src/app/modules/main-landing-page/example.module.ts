import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/main-landing-page/example.component';

const routes: Route[] = [
  {
    path: '',
    component: ExampleComponent,
  },
];

@NgModule({
  declarations: [ExampleComponent],
  imports: [RouterModule.forChild(routes)],
})
export class ExampleModule {}
