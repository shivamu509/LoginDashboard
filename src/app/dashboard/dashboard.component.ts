import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  editDialogVisible = false;
  username: string = ""

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.employees = [
      { id: 1, name: 'Ram', salary: 60000 },
      { id: 2, name: 'Shyam', salary: 75000 },
      { id: 3, name: 'Sundar', salary: 90000 }
    ];

     this.route.queryParams.subscribe(params => {
      this.username = params['user'] || 'Guest';
    });
  }

  get highestSalary(): number {
    return Math.max(...this.employees.map(e => e.salary));
  }

  editEmployee(emp: Employee) {
    this.selectedEmployee = {...emp};
    this.editDialogVisible = true;
  }

  saveEdit() {
    if (this.selectedEmployee) {
      const index = this.employees.findIndex(e => e.id === this.selectedEmployee!.id);
      if (index !== -1) {
        this.employees[index] = {...this.selectedEmployee};
        this.employees = [...this.employees];
      }
    }
    this.editDialogVisible = false;
    this.selectedEmployee = null;
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}