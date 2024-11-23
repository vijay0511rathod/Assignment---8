import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcompo',
  standalone: true,
  imports: [],
  templateUrl: './childcompo.component.html',
  styleUrl: './childcompo.component.css'
})
export class ChildcompoComponent {

  @Output() public myevent = new EventEmitter();
  public Message()
  {
    this.myevent.emit('Hello Parent....');
  }

}
