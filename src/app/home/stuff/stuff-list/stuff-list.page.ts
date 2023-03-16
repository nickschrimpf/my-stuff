import { Component, OnInit } from '@angular/core';
import { MyStuffService } from 'src/app/services/my-stuff.service';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.page.html',
  styleUrls: ['./stuff-list.page.scss'],
})
export class StuffListPage implements OnInit {
  stuffList:any
  constructor(private readonly stuffServ:MyStuffService) { }

  ngOnInit() {
    this.stuffList = this.stuffServ.onGetStuff();
  }


}
