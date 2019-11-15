import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bms';
  inputNum : any;
  arr = [7000,7001,7002,7003,7004,7005];
  error = "";
  onKeyPress(e){
    debugger;
    this.error = "";
    let duplicates = [];
    let tempArr = this.inputNum.split(',');
    for(let i=0;i<tempArr.length;i++){
        if(tempArr[i].includes('-')){
          let range = tempArr[i].split('-');
          for(let j=range[0];j<=range[1];j++){
            if(this.arr.includes(j)){
              this.error += j + ",";
            }
          }
        }
        else{
          if(this.arr.includes(parseInt(tempArr[i]))){
            duplicates.push(tempArr[i]);
            this.error += tempArr[i] + ",";
          }
          // trying to add the new numbers into existing array
          // else{
          //   this.arr.push(parseInt(tempArr[i]));
          // }
        }
    }
    if(this.error){
      this.error = this.error.slice(0,-1);
      this.error += " are duplicates and will be skipped"
    }
  }

  validNumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if(charCode == 44 || charCode == 45){
          return true;
        }
      return false;
    }
    return true;
  }
}
