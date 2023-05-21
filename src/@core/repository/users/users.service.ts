import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/@core/domain/employee.entity';
import { environment } from 'src/environments/environment';


const baseUrl = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    console.log('ini data');
    return this.http.get<Employee[]>(baseUrl);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
