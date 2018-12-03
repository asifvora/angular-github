import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  userError: String;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    let username = this.f.username.value;
    this.router.navigate(['github', username]);
  }

}
