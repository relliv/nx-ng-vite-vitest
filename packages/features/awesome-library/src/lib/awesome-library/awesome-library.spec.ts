import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwesomeLibrary } from './awesome-library';

describe('AwesomeLibrary', () => {
  let component: AwesomeLibrary;
  let fixture: ComponentFixture<AwesomeLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwesomeLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(AwesomeLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
