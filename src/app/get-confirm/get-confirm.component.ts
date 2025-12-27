import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  constructor(
    private _matdialougref : MatDialogRef<GetConfirmComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this._matdialougref.close()
  }

}
