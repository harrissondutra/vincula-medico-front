import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoReadComponent } from './estabelecimento-read.component';

describe('EstabelecimentoReadComponent', () => {
  let component: EstabelecimentoReadComponent;
  let fixture: ComponentFixture<EstabelecimentoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
