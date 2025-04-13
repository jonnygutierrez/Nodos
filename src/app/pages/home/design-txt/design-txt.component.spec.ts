import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTxtComponent } from './design-txt.component';

describe('DesignTxtComponent', () => {
  let component: DesignTxtComponent;
  let fixture: ComponentFixture<DesignTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTxtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
