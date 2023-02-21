import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2CHILDComponent } from './comp2-child.component';

describe('Comp2CHILDComponent', () => {
  let component: Comp2CHILDComponent;
  let fixture: ComponentFixture<Comp2CHILDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2CHILDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp2CHILDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
