import { Component } from '@angular/core';

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
    { id: 1, name: 'Alice', salary: 60000 },
    { id: 2, name: 'Bob', salary: 75000 },
    { id: 3, name: 'Charlie', salary: 90000 }
  ];

  selectedEmployee: Employee | null = null;
  sortAsc: boolean = true;

   get highestSalary(): number {
    return Math.max(...this.employees.map(e => e.salary));
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
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

  sortBySalary() {
    this.employees.sort((a, b) => this.sortAsc ? a.salary - b.salary : b.salary - a.salary);
    this.sortAsc = !this.sortAsc;
  }

}
