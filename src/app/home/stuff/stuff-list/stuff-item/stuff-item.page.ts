import { Component, Input, OnInit } from '@angular/core';
import { Stuff } from 'src/app/models/stuff';

@Component({
  selector: 'app-stuff-item',
  templateUrl: './stuff-item.page.html',
  styleUrls: ['./stuff-item.page.scss'],
})
export class StuffItemPage implements OnInit {
  @Input() stuffItem!:Stuff
  constructor() { }

  ngOnInit() {
  }

}
