import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeComponent } from './wildlife.component';

describe('WildlifeComponent', () => {
  let component: WildlifeComponent;
  let fixture: ComponentFixture<WildlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildlifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
