import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPageModelPage } from './login-page-model.page';

describe('LoginPageModelPage', () => {
  let component: LoginPageModelPage;
  let fixture: ComponentFixture<LoginPageModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
