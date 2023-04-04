import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",component: AjoutArticleComponent},
  {path:"list", component:ListArticleComponent },
  {path:"ajout", component: AjoutArticleComponent},
  {path:"update/:id", component: AjoutArticleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
