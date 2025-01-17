import { Component } from '@angular/core';
import { HeaderChatComponent } from "../components/header-chat/header-chat.component";
import { BodyChatComponent } from "../components/body-chat/body-chat.component";

@Component({
  selector: 'app-chat',
  imports: [HeaderChatComponent, BodyChatComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  standalone: true
})
export class ChatComponent {

}
