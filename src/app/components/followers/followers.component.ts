import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  @Input() username: string;
  followers: any;
  isLoading: boolean = true;
  isSuccess: boolean = false;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.getFollowers(this.username).subscribe(
      response => {
        this.isLoading = false;
        this.isSuccess = true;
        this.followers = response;
      }, error => {
        this.isLoading = false;
        this.isSuccess = false;
      });
  }

}
