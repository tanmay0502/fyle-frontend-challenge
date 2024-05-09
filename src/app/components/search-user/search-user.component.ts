import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  githubUsername: string;

  constructor(
    private apiService: ApiService
  ) {
    this.githubUsername = '';
  }

  ngOnInit() {
  }
  search() {
    this.apiService.getUser(this.githubUsername).subscribe(console.log);
  }
}
