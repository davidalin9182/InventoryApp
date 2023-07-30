import { Component } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  //to crate separate insatnce for the employee component not that used
  providers: [RoomsService]
})
export class EmployeeComponent {
  empName: string = 'Employe1';
  constructor(private roomService: RoomsService){
    
  }
}
