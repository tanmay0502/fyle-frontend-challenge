import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-repo',
  templateUrl: './single-repo.component.html',
  styleUrls: ['./single-repo.component.scss']
})
export class SingleRepoComponent {
  @Input() repo: any;

  constructor() { }
}
