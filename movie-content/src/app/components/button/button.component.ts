import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent {
  constructor(private router: Router) {}

  navigateToSecondPage(): void {
    this.router.navigate(['second-page']);
  }
}
