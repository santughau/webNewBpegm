import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { VideosComponent } from './videos/videos.component';
import { TermPaperComponent } from './term-paper/term-paper.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TextBookComponent } from './text-book/text-book.component';
import { GrComponent } from './gr/gr.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { AwardComponent } from './award/award.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'worksheet', component: WorksheetComponent },
  { path: 'video', component: VideosComponent },
  { path: 'term', component: TermPaperComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'text-book', component: TextBookComponent },
  { path: 'gr', component: GrComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'question/:id', component: QuestionPageComponent },
  { path: 'award', component: AwardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
