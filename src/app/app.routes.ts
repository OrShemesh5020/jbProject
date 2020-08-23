import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponentComponent } from './students-component/students-component.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './gallery-component/delete/delete.component';
import { EditComponent } from './gallery-component/edit/edit.component';
import { AddComponent } from './gallery-component/add/add.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { AboutComponent } from './about/about.component';
import { PrindRouterParamComponent } from './prind-router-param/prind-router-param.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'printouterparam/:name', component: PrindRouterParamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exercises', component: ExercisesComponent,
    children:[
      {path: 'exercise-1', component: PeopleInfoComponent},
      {path: 'exercise-2', component: StudentsComponentComponent},
      {path: 'exercise-3', component: MoviesComponent},
      {path: 'exercise-4', component: InputOutputExampleComponent},
    ] },
  {
    path: 'gallery',
    component: GalleryComponentComponent,
    children: [
      // { path: '', redirectTo: 'gallery', pathMatch: 'full' },
      { path: 'view', component: ViewComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'delete/:id', component: DeleteComponent },
    ],
  },
  { path: '**', component: PageNotFountComponent },
];
