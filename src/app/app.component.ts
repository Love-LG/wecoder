import { Component, OnInit } from '@angular/core';
// import { wsSend } from './public/webServe';
import { AppServe } from './app.serve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfData = [];

  constructor(
    private appServe: AppServe
    ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.appServe.getDataById(5).subscribe((r) => {
      console.log(r);
      const res: any = r;
      // this.listOfData = res.message;
      console.log(res instanceof String);
    });
  }

}
