import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-la-femme',
  templateUrl: './la-femme.component.html',
  styleUrls: ['./la-femme.component.scss']
})
export class LaFemmeComponent implements OnInit {
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
