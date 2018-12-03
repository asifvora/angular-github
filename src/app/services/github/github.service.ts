import { Injectable } from '@angular/core';
import { HttpService } from '../http-request/http.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpService: HttpService) { }

  getUser(username) {
    return this.httpService.get(`users/${username}`);
  }

  getOrganizations(username) {
    return this.httpService.get(`users/${username}/orgs`);
  }

  getRepositories(username) {
    return this.httpService.get(`users/${username}/repos?per_page=250`);
  }

  getStarred(username) {
    return this.httpService.get(`users/${username}/starred?per_page=250`);
  }

  getFollowers(username) {
    return this.httpService.get(`users/${username}/followers?per_page=250`);
  }

  getFollowings(username) {
    return this.httpService.get(`users/${username}/following?per_page=250`);
  }

}
