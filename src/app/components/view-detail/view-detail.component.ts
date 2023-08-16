import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserClass } from 'src/app/shared/classes/object-table';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  searchForm: FormGroup;
  submit: boolean;
  headerTable: UserClass;
  constructor(private formBuilder: FormBuilder) {
    this.submit = false;
    this.headerTable = new UserClass('Numero de Referencia', 'Descripción', 'Unidades', 'Precio');
  }
  ngOnInit(): void {
    this.starForm();
  }
  get controlsSerch(): any {
    return this.searchForm.controls;
  }

  starForm(): void {
    this.searchForm = this.formBuilder.group({
      producto: ["", [Validators.required]]
    })
  }
  searhProduct(){
    this.submit = this.searchForm.invalid === true ? true : false;
  }
}

