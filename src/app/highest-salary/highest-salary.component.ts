import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highest-salary',
  standalone: false,
  templateUrl: './highest-salary.component.html',
  styleUrl: './highest-salary.component.css'
})
export class HighestSalaryComponent {
  @Input() highestSalary: number = 0;
}
