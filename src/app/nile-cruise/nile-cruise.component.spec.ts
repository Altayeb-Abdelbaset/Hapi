import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NileCruiseComponent } from './nile-cruise.component';

describe('NileCruiseComponent', () => {
  let component: NileCruiseComponent;
  let fixture: ComponentFixture<NileCruiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NileCruiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NileCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
