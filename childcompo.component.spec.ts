import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompoComponent } from './childcompo.component';

describe('ChildcompoComponent', () => {
  let component: ChildcompoComponent;
  let fixture: ComponentFixture<ChildcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildcompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
