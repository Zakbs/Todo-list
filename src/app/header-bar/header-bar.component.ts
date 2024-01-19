import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  constructor(public todoService:TodoService){}
  
}
