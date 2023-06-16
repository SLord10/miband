import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  collapse : boolean = true;

  hide() : void {
    this.collapse = this.collapse;
  }
}
