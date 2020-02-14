import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class TestService {

  constructor(private renderer: Renderer2) {
    console.log(renderer);
  }
}
