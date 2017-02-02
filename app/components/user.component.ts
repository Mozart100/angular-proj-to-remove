import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'user',
  template: `<h1>User {{name}} Say Hello</h1>
  
  <ul>
    <li>xxx</li>
    <li>yyy</li>
  </ul>

<br/>
<br/>

<ul>
    <li *ngFor="let person of people">id = {{person}} </li>
  </ul>


  
  
  `,
  providers:[DataService]
})
export class UserComponent  { 
    name:string; 
    people : Person[];
    counter:number;
    
    
    constructor(private dataService:DataService) {
      console.log('UserComponent is up!');
        this.name = 'John Doe';
        this.counter=0;
        this.people = new Array<Person>();
       this.dataService.getPosts().subscribe((persons:Person [])=> 
       {
          
       // Good    
         for(let per of persons)
           {
             console.log('per.title'+per.title);
              var person = new Person(per.id,per.userId,per.title,per.body);

              person.toString();
               this.people.push(person);
           }
         
         
        } );
    }
}

class Person
{
 id:number;
 userId:number;
 title:string;
 body:string;

  /**
   *
   */
  constructor(id:number , userId:number , title:string , body:string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    
  }

 public toString() : string
  {
    return "id: " + this.id + " " + "title" + this.title;
  }
}
