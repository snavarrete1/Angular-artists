import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-beach-house',
  templateUrl: './beach-house.component.html',
  styleUrls: ['./beach-house.component.scss']
})
export class BeachHouseComponent implements OnInit {
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
