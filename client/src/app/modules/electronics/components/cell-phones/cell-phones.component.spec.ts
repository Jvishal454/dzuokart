import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhonesComponent } from './cell-phones.component';

describe('CellPhonesComponent', () => {
  let component: CellPhonesComponent;
  let fixture: ComponentFixture<CellPhonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CellPhonesComponent]
    });
    fixture = TestBed.createComponent(CellPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
