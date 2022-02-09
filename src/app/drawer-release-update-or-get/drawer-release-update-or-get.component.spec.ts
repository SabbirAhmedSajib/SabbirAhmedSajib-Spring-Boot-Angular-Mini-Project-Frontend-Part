import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerReleaseUpdateOrGetComponent } from './drawer-release-update-or-get.component';

describe('DrawerReleaseUpdateOrGetComponent', () => {
  let component: DrawerReleaseUpdateOrGetComponent;
  let fixture: ComponentFixture<DrawerReleaseUpdateOrGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerReleaseUpdateOrGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerReleaseUpdateOrGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
