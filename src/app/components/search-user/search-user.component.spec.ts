import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { SearchUserComponent } from './search-user.component';
import { ApiService } from '../../services/api.service';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchUserComponent],
      providers: [ApiService]
    });

    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search() and return user data', () => {
    const mockUserData = { login: 'tanmay0502', id: 81376006, public_repos: 28 };
    spyOn(apiService, 'getUser').and.returnValue(of(mockUserData));

    component.githubUsername = 'tanmay0502';
    component.search();

    expect(component.userData).toEqual(mockUserData);
    expect(component.errorMessage).toEqual('');
    expect(component.loading).toEqual(false);
  });

  it('should handle error when search() is called', () => {
    const error = { status: 404, message: 'User Not found' };
    spyOn(apiService, 'getUser').and.returnValue(throwError(error));

    component.githubUsername = 'ptanmay0502';
    component.search();

    expect(component.errorMessage).toEqual('User Not found');
    expect(component.loading).toEqual(false);
  });
});
