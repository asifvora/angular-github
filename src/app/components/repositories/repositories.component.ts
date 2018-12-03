import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  
  @Input() username: string;
  repositories: any;
  isLoading: boolean = true;
  isSuccess: boolean = false;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.getRepositories(this.username).subscribe(
      response => {
        this.isLoading = false;
        this.isSuccess = true;        
        this.repositories = response;
      }, error => {
        this.isLoading = false;
        this.isSuccess = false;
      });
  }

}
