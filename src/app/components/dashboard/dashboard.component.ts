import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee } from 'src/@core/domain/employee.entity';
import { EmployeeService } from 'src/@core/repository/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee!: Employee[];
  isDeleting: boolean

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAlls();
  }

  getAlls() {
    this.employeeService.getAll()
      .pipe(first())
      .subscribe(users => this.employee = users);
      console.log(this.employee, 'ini users');
  }

  deleteUser(id: string) {
    const user = this.employee.find(x => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.employeeService.delete(id)
        .pipe(first())
        .subscribe(() => this.employee = this.employee.filter(x => x.id !== id));
  }

}
