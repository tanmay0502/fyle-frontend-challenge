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
  @Output() userEvent = new EventEmitter<any>();  

  constructor(
    private apiService: ApiService
  ) {
    this.githubUsername = '';
  }

  ngOnInit() {
  }
  search() {
    this.apiService.getUser(this.githubUsername).subscribe(data => {
      this.userData = data;
      this.userEvent.emit(this.userData);  
    }, error => {
      this.errorMessage = 'Invalid user';  
    });
  }
}
