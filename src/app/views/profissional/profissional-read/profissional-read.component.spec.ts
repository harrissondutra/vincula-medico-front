import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalReadComponent } from './profissional-read.component';

describe('ProfissionalReadComponent', () => {
  let component: ProfissionalReadComponent;
  let fixture: ComponentFixture<ProfissionalReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
