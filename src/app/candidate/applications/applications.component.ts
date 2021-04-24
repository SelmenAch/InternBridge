import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  isCandidateLoggedIn = false;
  userdata: any = {} ;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken() && this.tokenStorage.getRole() == "Candidate") {
      this.isCandidateLoggedIn = true;
      this.userdata = JSON.parse(this.tokenStorage.getUser());

    }

  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
