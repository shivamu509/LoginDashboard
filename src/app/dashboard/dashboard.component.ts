import { Component, ViewChild } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  employees: Employee[] = [
    { id: 1, name: 'Ram', salary: 60000 },
    { id: 2, name: 'Shyam', salary: 75000 },
    { id: 3, name: 'Sundar', salary: 90000 }
  ];

  selectedEmployee: Employee | null = null;
  sortAscending: boolean = true;

  get highestSalary(): number {
    return Math.max(...this.employees.map(e => e.salary));
  }

  editEmployee(emp: Employee) {
    this.selectedEmployee = { ...emp };
  }

  saveEdit() {
    if (this.selectedEmployee) {
      const index = this.employees.findIndex(e => e.id === this.selectedEmployee!.id);
      this.employees[index] = { ...this.selectedEmployee };
      this.selectedEmployee = null;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }

  sortBySalary() {
    this.employees.sort((a, b) =>
      this.sortAscending ? a.salary - b.salary : b.salary - a.salary
    );
    this.sortAscending = !this.sortAscending;
  }

}
