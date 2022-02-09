import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerReleaseComponent } from './drawer-release.component';

describe('DrawerReleaseComponent', () => {
  let component: DrawerReleaseComponent;
  let fixture: ComponentFixture<DrawerReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
