import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksheetComponent,
    VideosComponent,
    TermPaperComponent,
    ContactUsComponent,
    AboutUsComponent,
    TextBookComponent,
    GrComponent,
    QuizComponent,
    QuestionPageComponent,
    AwardComponent
  ],
  imports: [
    BrowserModule, DataTablesModule, FormsModule ,
    AppRoutingModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
