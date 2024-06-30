import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { FirebaseService } from '../services/firebase.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockFirebaseService;

  beforeEach(async () => {
    localStorage.setItem("user", "{\"nombre\":\"mariana\",\"apellido\":\"acuna\"}")
    mockFirebaseService = jasmine.createSpyObj(['signOut'])
    mockFirebaseService.signOut.and.returnValue(true);
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [ { provide: FirebaseService, useValue: mockFirebaseService } ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
