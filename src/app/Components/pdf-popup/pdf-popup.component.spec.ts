import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPopupComponent } from './pdf-popup.component';

describe('PdfPopupComponent', () => {
  let component: PdfPopupComponent;
  let fixture: ComponentFixture<PdfPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfPopupComponent]
    });
    fixture = TestBed.createComponent(PdfPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
