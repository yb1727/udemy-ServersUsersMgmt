import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userId : number ;
  allowEdit = false ;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.queryParams['id'] ;
    this.route.queryParams.subscribe (
      (queryParams : Params) => {
        this.allowEdit = queryParams ['allowEdit'] === '1';
      }
    );
  }
}
