import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string}


  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.user = {
      // reading path parameters to initialize local user object and its variables
           id: this.route.snapshot.params['id'],
           name: this.route.snapshot.params['name']
         }
    // Subscribing using an observable to listen to changes in url parameters, 
    // and then loading paramters to internal variables
    this.route.params.subscribe (
      (params : Params) => {
          this.user.id= params['id'] ;
          this.user.name= params ['name'];
      });
  }

  onEditUser(id: number) {
   
    // Navigating to UserEditComponent using a URL with query params and fragement
      this.router.navigate(['edit'],{relativeTo: (this.route), queryParamsHandling:'preserve'});
  }
}
