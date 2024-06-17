import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiamondPriceServiceService } from '../mlforms/diamond-price-service.service';
import { DiamondPriceModel } from '../models/diamond-price-model';

@Component({
  selector: 'app-diamond-price-form',
  templateUrl: './diamond-price-form.component.html',
  styleUrls: ['./diamond-price-form.component.css']
})

export class DiamondPriceFormComponent implements OnInit {

  diamondPriceForm: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private diamondPriceService: DiamondPriceServiceService
 ) {}

  ngOnInit(): void {
    this.diamondPriceForm = this.formBuilder.group({
      carat: ['', Validators.required],
      cut: ['', [Validators.required, Validators.pattern("^(Good|Very Good|Ideal|Premium)$")]],
      color: ['', Validators.required],
      clarity: ['', Validators.required],
      depth: ['', [Validators.required, Validators.min(40), Validators.max(80)]],
      table: ['', Validators.required],
      x: ['', Validators.required],
      y: ['', Validators.required],
      z: ['', Validators.required]
    })
    
  }

  onSubmit() {

    if (this.diamondPriceForm.valid) {
      let diamond: DiamondPriceModel = this.diamondPriceForm.value
      this.diamondPriceService.addDiamond(diamond).subscribe(() => {
        alert('Diamond entry created')
    })
       
    this.diamondPriceForm.reset()

    }
  }
}
