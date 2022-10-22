import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let employeeService: EmployeeService;

  beforeEach(() => {
    component = new AppComponent(employeeService);
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'employee-manager-frontend'`, () => {
    expect(component.title).toEqual('employee-manager-frontend');
  });
});
