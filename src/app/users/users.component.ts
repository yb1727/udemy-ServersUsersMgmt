import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: {id: number , name: string }[]= [
    {id: 1, name: "Gilad"},{id: 2 ,name: "Yair"},{id: 3 ,name: "Moshe"}
  ];

  constructor(private router: Router,
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe ;
  }
}
