import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermPaperComponent } from './term-paper.component';

describe('TermPaperComponent', () => {
  let component: TermPaperComponent;
  let fixture: ComponentFixture<TermPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
