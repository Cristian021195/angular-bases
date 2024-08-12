import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoMensajeComponent } from './hijo-mensaje.component';

describe('HijoMensajeComponent', () => {
  let component: HijoMensajeComponent;
  let fixture: ComponentFixture<HijoMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoMensajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
