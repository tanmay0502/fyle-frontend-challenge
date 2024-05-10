import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SingleRepoComponent } from './single-repo.component';

describe('SingleRepoComponent', () => {
  let component: SingleRepoComponent;
  let fixture: ComponentFixture<SingleRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRepoComponent]
    });
    fixture = TestBed.createComponent(SingleRepoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repo data', () => {
    const mockRepoData = {
      html_url: 'https://api.github.com/repos/tanmay0502/neurodactyl_clone',
      name: 'neurodactyl_clone',
      language: 'JavaScript',
    };
    component.repo = mockRepoData;
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2 a')?.textContent).toContain(mockRepoData.name);
    expect(compiled.querySelector('h2 a')?.getAttribute('href')).toEqual(mockRepoData.html_url);
    expect(compiled.querySelector('.flex span:nth-child(2)')?.textContent).toContain(mockRepoData.language);
  });
  
});
