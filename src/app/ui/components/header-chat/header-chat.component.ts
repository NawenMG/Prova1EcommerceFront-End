import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-chat',
  imports: [RouterOutlet],
  templateUrl: './header-chat.component.html',
  styleUrl: './header-chat.component.css',
  standalone: true
})
export class HeaderChatComponent {
  defaultImage: string = 'https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


}
