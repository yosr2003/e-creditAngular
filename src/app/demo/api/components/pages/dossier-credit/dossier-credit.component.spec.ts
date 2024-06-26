import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierCreditComponent } from './dossier-credit.component';

describe('DossierCreditComponent', () => {
  let component: DossierCreditComponent;
  let fixture: ComponentFixture<DossierCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossierCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
