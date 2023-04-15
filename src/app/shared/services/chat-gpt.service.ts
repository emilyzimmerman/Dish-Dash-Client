import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatGPTService {
  constructor(private http: HttpClient) {}

  getGptResponse(prompt: string) {
    const endpoint =
      'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B';
    const headers = {
      Authorization: 'Bearer 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',
    };
    const data = { inputs: prompt };
    console.log('TEST WORKED', data);
    return this.http.post(endpoint, data, { headers });
  }
}
