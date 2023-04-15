import { Component, OnInit } from '@angular/core';
import { ChatGPTService } from '../shared/services/chat-gpt.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css'],
})
export class ChatGPTComponent implements OnInit {
  prompt: any = null;
  gptResponse: any = null;

  constructor(private gptService: ChatGPTService) {}

  ngOnInit(): void {}

  getGptResponse() {
    this.gptService.getGptResponse(this.prompt).subscribe((res: any) => {
      this.gptResponse = res.generated_text;
      console.log(res);
    });
  }
}
