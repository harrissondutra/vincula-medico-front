import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoCreateComponent } from './estabelecimento-create.component';

describe('EstabelecimentoCreateComponent', () => {
  let component: EstabelecimentoCreateComponent;
  let fixture: ComponentFixture<EstabelecimentoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
