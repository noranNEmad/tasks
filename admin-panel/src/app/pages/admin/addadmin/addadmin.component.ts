import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss']
})
export class AddadminComponent implements OnInit {

  admindata:any = {
    name: "",
    email: "",
    phone: "",
    password: "",
    age:""
  }
  specialerror=''
  constructor() { }

  ngOnInit(): void {
  }

  addperson(addform: NgForm) {}

  checkphone(pnum:string):boolean{if (
    (pnum.startsWith('010') || pnum.startsWith('015') || pnum.startsWith('011') ||
    pnum.startsWith('012') ) && pnum.length==11)
  {
    this.specialerror=""
    return  true
  }  
  else {
    if (pnum.length!=11) this.specialerror = "phone must be 11 number"
    else this.specialerror="invaliad format"
    return false
  }}

}
