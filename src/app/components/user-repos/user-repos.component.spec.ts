import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserReposComponent } from './user-repos.component';
import { ApiService } from '../../services/api.service';
import { of, throwError } from 'rxjs';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserReposComponent],
      providers: [ApiService]
    });
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call repos() and return user repo data', () => {
    const mockRepoData = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    spyOn(apiService, 'getRepos').and.returnValue(of(mockRepoData));

    component.userData = { login: 'testuser', public_repos: 2 };
    component.ngOnChanges();

    expect(component.repoData).toEqual(mockRepoData);
    expect(component.errorMessage).toEqual('');
    expect(component.loading).toEqual(false);
  });

  it('should handle error when repos() is called', () => {
    const error = { status: 404, message: 'Invalid user' };
    spyOn(apiService, 'getRepos').and.returnValue(throwError(error));

    component.userData = { login: 'testuser', public_repos: 2 };
    component.ngOnChanges();

    expect(component.errorMessage).toEqual('Invalid user');
    expect(component.loading).toEqual(false);
  });
});
