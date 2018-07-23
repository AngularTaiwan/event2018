import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDialogComponent } from './speaker-dialog.component';

describe('SpeakerDialogComponent', () => {
  let component: SpeakerDialogComponent;
  let fixture: ComponentFixture<SpeakerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
