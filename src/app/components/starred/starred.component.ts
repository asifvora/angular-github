import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit {

  @Input() username: string;
  @Input() starredRepoName: string;
  starred: any;
  isLoading: boolean = true;
  isSuccess: boolean = false;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.getStarred(this.username).subscribe(
      response => {
        this.isLoading = false;
        this.isSuccess = true;        
        this.starred = response;
      }, error => {
        this.isLoading = false;
        this.isSuccess = false;
      });
  }

}
