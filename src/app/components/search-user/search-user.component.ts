import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  githubUsername: string;
  userData: any;
  errorMessage: string = '';
  loading: boolean = false;
  @Output() userEvent = new EventEmitter<any>();  

  constructor(private apiService: ApiService) {
    this.githubUsername = '';
  }

  search() {
    this.loading = true; 
    this.apiService.getUser(this.githubUsername).subscribe(
      data => {
        this.userData = data;
        this.errorMessage = '';
        this.userEvent.emit(this.userData);
      }, 
      error => {
        this.errorMessage = 'User Not found';
      }
    ).add(() => {
      this.loading = false; 
    });
  }
}
