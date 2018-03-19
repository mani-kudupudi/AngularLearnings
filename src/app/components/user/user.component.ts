import { Component, OnInit } from '@angular/core';
import {DataService} from '../.././services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:{
    street:string,
    city:string;
    state:string;
  };
  dob:any;
  hobbies:string[];
  posts:any;
  isEdit:boolean=false;
  constructor(private dataService:DataService) {
    
   }

  ngOnInit() {
    console.log('init ran...');
    this.name='Kanna';
    this.age=30;
    this.address={
      street:'340',state:'ridgeland',city:'MS'
    };
    this.hobbies=['play','eat','sleep'];

    this.dataService.getposts().subscribe((posts)=>{
      this.posts=posts;
    /*  this.posts.forEach(element => {
        delete element.id });*/
    });
   
      
  }
  onClicked(){
    console.log('Hello');
    this.name='Mani ';
    return true;
  }
  toggleButton(){
    this.isEdit=!this.isEdit;
  }



  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return true;
  }
}


interface Posts{
  id:string;
  title:string;
  body:string;
  userid:number;
}