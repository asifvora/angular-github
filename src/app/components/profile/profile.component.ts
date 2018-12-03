import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() username: string;
  user: any;
  isUserLoading: boolean = true;
  isUserSuccess: boolean = false;
  organizations: any;
  isOrganizationsSuccess: boolean = false

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.getUser(this.username).subscribe(
      response => {
        this.isUserSuccess = true;
        this.isUserLoading = false;
        this.user = response;
      }, error => {
        this.isUserSuccess = false;
        this.isUserLoading = false;
      });

    this.github.getOrganizations(this.username).subscribe(
      response => {
        this.isOrganizationsSuccess = true;
        this.organizations = response;
      }, error => {
        this.isOrganizationsSuccess = false;
      });
  }

}
