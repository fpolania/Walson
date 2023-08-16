import { Component, Input, Output } from '@angular/core';
import { UserClass, tableDetail } from '../classes/object-table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
@Input() listHeaderTable: UserClass;

}
