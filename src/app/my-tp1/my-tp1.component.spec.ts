import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTp1Component } from './my-tp1.component';

describe('MyTp1Component', () => {
  let component: MyTp1Component;
  let fixture: ComponentFixture<MyTp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
