import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeProccessComponent } from './creative-proccess.component';

describe('CreativeProccessComponent', () => {
  let component: CreativeProccessComponent;
  let fixture: ComponentFixture<CreativeProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeProccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreativeProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
