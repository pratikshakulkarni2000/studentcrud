import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  stdArr : Array<Istd> = [
  
  {
    fname: 'Amit',
    lname: 'Sharma',
    email: 'amit.sharma@gmail.com',
    contact: 9876543210,
    stdId: 'STD101'
  },
  {
    fname: 'Neha',
    lname: 'Verma',
    email: 'neha.verma@gmail.com',
    contact: 9123456780,
    stdId: 'STD102'
  },
  {
    fname: 'Rahul',
    lname: 'Patil',
    email: 'rahul.patil@gmail.com',
    contact: 9988776655,
    stdId: 'STD103'
  },
  {
    fname: 'Sneha',
    lname: 'Kulkarni',
    email: 'sneha.kulkarni@gmail.com',
    contact: 9090909090,
    stdId: 'STD104'
  },
  {
    fname: 'Vikas',
    lname: 'Deshmukh',
    email: 'vikas.deshmukh@gmail.com',
    contact: 9567891234,
    stdId: 'STD105'
  }
];

  isInEditMode : boolean = false
  @ViewChild('fname') fname !: ElementRef;
  @ViewChild('lname') lname !: ElementRef;
  @ViewChild('email') email !: ElementRef;
  @ViewChild('contact') contact !: ElementRef;

  constructor(
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {

  }

  trackById(index : number, s : Istd){
    return s.stdId
  }

   uuid = () => {
  return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
    /[xy]/g,
    character => {
      const random = (Math.random() * 16) | 0
      const value = character === 'x' ? random : (random & 0x3) | 0x8
      return value.toString(16)
    }
  )
}

  onStdAdd(){
    let STD_OBJ = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contact.nativeElement.value,
      stdId : this.uuid()
    }

      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.contact.nativeElement.value = '';

      this.stdArr.push(STD_OBJ);
  }

      onRemove(id:string){

        let matConfig  = new MatDialogConfig();
        matConfig.disableClose = true;
        matConfig.width = "500px";

          let matDialogRef = this._matDialog.open(GetConfirmComponent,matConfig);

        let getIndex = this.stdArr.findIndex(std => std.stdId === id);
        
        this.stdArr.splice(getIndex,1);
      }

}
