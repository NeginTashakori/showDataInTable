import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr"



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


export class TransactionComponent {

  constructor(){}

  mytext:any;
  array! : string[]

  onSubmit() {
    this.array = this.mytext.split('\n')
    for( const s in this.array)
    {
      console.log(s.toString())

    }
  }

}
