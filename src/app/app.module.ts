import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { AddStringPipe } from './add-string.pipe';
import { MultiplyStringPipe } from './multiply-string.pipe';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponentComponent } from './students-component/students-component.component';
import { PhonePipe } from './phone.pipe';
import { DuplicatePipe } from './duplicate.pipe';
import { FibonacciPipe } from './fibonacci.pipe';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';
import { ColorSelectedComponent } from './input-output-example/color-selected/color-selected.component';
import { PrintSelectedColorComponent } from './input-output-example/print-selected-color/print-selected-color.component';
import { NameSelectorComponent } from './name-selector/name-selector.component';
import { NameRecieverComponent } from './name-selector/name-reciever/name-reciever.component';
import { NamePresenterComponent } from './name-selector/name-presenter/name-presenter.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { VideoComponentComponent } from './gallery-component/video-component/video-component.component';
import { PromisePracticeComponent } from './promise-practice/promise-practice.component';
import { PreviewComponentComponent } from './preview-component/preview-component.component';
import { PreviewImageComponent } from './preview-component/preview-image/preview-image.component';
import { PreviewVideoComponent } from './preview-component/preview-video/preview-video.component';
import { from } from 'rxjs';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { PrindRouterParamComponent } from './prind-router-param/prind-router-param.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './gallery-component/add/add.component';
import { EditComponent } from './gallery-component/edit/edit.component';
import { DeleteComponent } from './gallery-component/delete/delete.component';
import { ViewComponent } from './view/view.component';
import { GalleryNavBarComponent } from './gallery-nav-bar/gallery-nav-bar.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExeNavBarComponent } from './exercises/exe-nav-bar/exe-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ImageComponentComponent,
    PeopleInfoComponent,
    PipeExampleComponent,
    AddStringPipe,
    MultiplyStringPipe,
    MoviesComponent,
    StudentsComponentComponent,
    PhonePipe,
    DuplicatePipe,
    FibonacciPipe,
    InputOutputExampleComponent,
    ColorSelectedComponent,
    PrintSelectedColorComponent,
    NameSelectorComponent,
    NameRecieverComponent,
    NamePresenterComponent,
    GalleryComponentComponent,
    VideoComponentComponent,
    PromisePracticeComponent,
    PreviewComponentComponent,
    PreviewImageComponent,
    PreviewVideoComponent,
    PageNotFountComponent,
    PrindRouterParamComponent,
    AboutComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ViewComponent,
    GalleryNavBarComponent,
    ExercisesComponent,
    ExeNavBarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
