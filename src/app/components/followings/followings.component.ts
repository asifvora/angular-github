import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {

  @Input() username: string;
  followings: any;
  isLoading: boolean = true;
  isSuccess: boolean = false;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.getFollowings(this.username).subscribe(
      response => {
        this.isLoading = false;
        this.isSuccess = true;        
        this.followings = response;
      }, error => {
        this.isLoading = false;
        this.isSuccess = false;
      });
  }

}
