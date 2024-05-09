import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnChanges {
  @Input() userData: any;
  repoData: any;
  errorMessage: string = '';  
  currentPage: number = 1;
  reposPerPage: number = 10;
  totalPages!: number;
  cache: any = {};
  
  constructor(
    private apiService: ApiService
  ) {
  }

  repos() {
    if (!this.cache[this.currentPage]) {
      this.cache[this.currentPage] = {};
    }

    if (this.cache[this.currentPage][this.reposPerPage]) {
      this.repoData = this.cache[this.currentPage][this.reposPerPage];
    } else {
      this.apiService.getRepos(this.userData.login, this.currentPage, this.reposPerPage).subscribe(data => {
        this.repoData = data;
        this.cache[this.currentPage][this.reposPerPage] = data;
        console.log("Repos: ",this.repoData);
      }, error => {
        this.errorMessage = 'Invalid user';  
      });
    }
  }

  ngOnChanges() {
    if (this.userData) {
      this.totalPages = Math.ceil(this.userData.public_repos / this.reposPerPage);
      this.repos();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.repos();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.repos();
    }
  }

  changeReposPerPage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.reposPerPage = Number(selectElement.value);
    this.totalPages = Math.ceil(this.userData.public_repos / this.reposPerPage);
    this.repos();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.repos();
  }
}
