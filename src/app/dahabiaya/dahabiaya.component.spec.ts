import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahabiayaComponent } from './dahabiaya.component';

describe('AboutComponent', () => {
  let component: DahabiayaComponent;
  let fixture: ComponentFixture<DahabiayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DahabiayaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahabiayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
