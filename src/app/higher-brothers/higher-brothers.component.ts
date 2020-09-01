import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-higher-brothers',
  templateUrl: './higher-brothers.component.html',
  styleUrls: ['./higher-brothers.component.scss']
})
export class HigherBrothersComponent implements OnInit {
  artistsDescriptionDisplay;
  artistsNameDisplay;
  artistsCategoryDisplay;

  artistsForm = new FormGroup({
    artistsName: new FormControl(''),
    artistsDescription: new FormControl(''),
    artistsCategory: new FormControl('')
  })


  onSubmit(){
    console.log(`${this.artistsForm.value.artistsName}`)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
