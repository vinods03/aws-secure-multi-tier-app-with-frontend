import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiamondPriceServiceService } from '../mlforms/diamond-price-service.service';
import { DiamondPriceModel } from '../models/diamond-price-model';

@Component({
  selector: 'app-diamond-attributes-retrieve',
  templateUrl: './diamond-attributes-retrieve.component.html',
  styleUrls: ['./diamond-attributes-retrieve.component.css']
})

export class DiamondAttributesRetrieveComponent implements OnInit {

  diamondAttrForm: FormGroup = new FormGroup({})
  diamondEntry: DiamondPriceModel = {"carat":0,"cut":"","color":"","clarity":"","depth":0,"table":0,"x":0,"y":0,"z":0}
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private diamondPriceService: DiamondPriceServiceService
 ) {}

  ngOnInit(): void {
    this.diamondAttrForm = this.formBuilder.group({
      run_id: ['', Validators.required]
    }   
    )    
  }

  onSubmit() {

    if (this.diamondAttrForm.valid) {
      let run_id: number = this.diamondAttrForm.value['run_id']
      this.diamondPriceService.getDiamond(run_id).subscribe((diamond) => {
       this.diamondEntry = diamond
      //  alert(this.diamondEntry.carat)
      })
           
    // this.diamondAttrForm.reset()

    }
  }
}


