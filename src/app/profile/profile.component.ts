import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sub: any;
	profile: any;
  ok : boolean = false ;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    
      this.sub = this.route.params.subscribe((params) => {
			const id = params['id'];
      
    this.userService.get_profile(id).subscribe(
      data => {
        console.log(data);
        this.profile = data;
        this.ok = true ;
       
      },
      err => {
        console.log(err.error.message);
      }
    );

		});


  }

}
