import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesJointesComponent } from './pieces-jointes.component';

describe('PiecesJointesComponent', () => {
  let component: PiecesJointesComponent;
  let fixture: ComponentFixture<PiecesJointesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiecesJointesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiecesJointesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
