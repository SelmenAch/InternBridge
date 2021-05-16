import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-manage-tests',
  templateUrl: './manage-tests.component.html',
  styleUrls: ['./manage-tests.component.css']
})
export class ManageTestsComponent implements OnInit {
  
  isAdminLoggedIn = false;
  userdata: any = {} ;
  tests: any = [];

  isSuccessful = false;
  isDeleteFailed = false;


  constructor(private tokenStorage: TokenStorageService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void{
      
      this.isAdminLoggedIn = true;
      this.userdata = JSON.parse(this.tokenStorage.getUser());
      

      this.getTests();

      setTimeout(function () {
        $(function () {
          (<any>$('#tests-table')).DataTable({
            pageLength: 5,
            fixedHeader: true,
            responsive: true,
            "sDom": 'rtip',
        });
        var table = (<any>$('#tests-table')).DataTable();
        $('#key-search').on('keyup', function() {
            table.search($(this).val()).draw();
        });
        $('#type-filter').on('change', function() {
            table.column(2).search($(this).val()).draw();
        });
        });
      }, 500);
  }

  generateTests(): void {
    
    this.adminService.generate_tests()
      .subscribe(
        data => {
          this.isSuccessful = true;
  
          window.location.reload();

        },
        error => {
          console.log(error);
        });
  }
 
  getTests(): void {
    
    this.adminService.get_tests()
      .subscribe(
        data => {
          this.tests = data;

          console.log(this.tests);
        },
        error => {
          console.log(error);
        });
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
