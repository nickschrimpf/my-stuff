import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Stuff } from 'src/app/models/stuff';
import { MyStuffService } from 'src/app/services/my-stuff.service';


@Component({
  selector: 'app-add-edit-stuff',
  templateUrl: './add-edit-stuff.page.html',
  styleUrls: ['./add-edit-stuff.page.scss'],
})
export class AddEditStuffPage implements OnInit {
  editMode:boolean = false;
  stuffID:any;
  stuffItem:any;


  constructor(private readonly route:ActivatedRoute,private readonly stuffServe:MyStuffService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=> {
      console.log(params['id'])
      if(params['id']){
        this.editMode = true;
      }
    })
    this.initForm()
  }

  private initForm(){

    if(this.editMode){
      this.stuffItem = this.stuffServe.getStuffByID(this.stuffID)
    }
    

  }

}
