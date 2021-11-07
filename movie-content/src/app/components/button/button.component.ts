import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent {
  @Input()
  page: string = '';

  constructor(private router: Router) {}
  navigateTo(): void {
    if (this.page === 'первую') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/second-page']);
    }
  }
}
