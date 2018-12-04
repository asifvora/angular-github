import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  private username;
  private repoName;
  private starredRepoName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   console.log('params', params['username']);
    // });
    this.username = this.route.snapshot.paramMap.get('username');
  }

  handleRepoName(value) {
    this.repoName = value;
  }

  handleStarredRepoName(value) {
    this.starredRepoName = value;
  }


}
