import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldversionComponent } from './oldversion.component';

describe('OldversionComponent', () => {
  let component: OldversionComponent;
  let fixture: ComponentFixture<OldversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
