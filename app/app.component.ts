import { Component } from '@angular/core';
import { UserComponent }  from './components/user.component';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
  <user> Loading component... </user>
  
  
  `,
})
export class AppComponent  { name = 'Angular';

constructor ()
{
  console.log('App component Started ');
} 
}
