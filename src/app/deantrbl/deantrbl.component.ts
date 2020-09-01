import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deantrbl',
  templateUrl: './deantrbl.component.html',
  styleUrls: ['./deantrbl.component.scss']
})
export class DeantrblComponent implements OnInit {
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
