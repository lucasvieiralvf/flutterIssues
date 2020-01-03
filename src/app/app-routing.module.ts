import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { PullRComponent } from './components/pull-r/pull-r.component';


const routes: Routes = [
  { path: "", redirectTo: "/issues", pathMatch: "full" },
  { path: "issues", component: IssuesComponent },
  { path: "pr", component: PullRComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
