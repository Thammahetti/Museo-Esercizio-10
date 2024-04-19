import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMostreComponent } from './liste-mostre.component';

describe('ListeMostreComponent', () => {
  let component: ListeMostreComponent;
  let fixture: ComponentFixture<ListeMostreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMostreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMostreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
