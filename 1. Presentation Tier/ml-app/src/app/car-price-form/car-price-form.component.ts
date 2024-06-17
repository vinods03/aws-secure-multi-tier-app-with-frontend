import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarPriceServiceService } from '../mlforms/car-price-service.service';
import { CarPriceModel } from '../models/car-price-model';

@Component({
  selector: 'app-car-price-form',
  templateUrl: './car-price-form.component.html',
  styleUrls: ['./car-price-form.component.css']
})

export class CarPriceFormComponent implements OnInit {

  carPriceForm: FormGroup = new FormGroup({})
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private carPriceService: CarPriceServiceService
  ) {}

  ngOnInit(): void {
    this.carPriceForm = this.formBuilder.group({
      "symboling": ['', Validators.required],
      "normalized-losses": ['', Validators.required],
      "wheel-base": ['', Validators.required],
      "make": ['', Validators.required],
      "fuel-type": ['', Validators.required],
      "aspiration": ['', Validators.required],
      "num-of-doors": ['', Validators.required],
      "body-style": ['', Validators.required],
      "drive-wheels": ['', Validators.required],
      "engine-location": ['', Validators.required],
      "length": ['', Validators.required],
      "width": ['', Validators.required],
      "height": ['', Validators.required],
      "curb-weight": ['', Validators.required],
      "engine-type": ['', Validators.required],
      "num-of-cylinders": ['', Validators.required],
      "engine-size": ['', Validators.required],
      "fuel-system": ['', Validators.required],
      "bore": ['', Validators.required],
      "stroke": ['', Validators.required],
      "compression-ratio": ['', Validators.required],
      "horsepower": ['', Validators.required],
      "peak-rpm": ['', Validators.required],
      "city-mpg": ['', Validators.required],
      "highway-mpg": ['', Validators.required]
    })
  }

  onSubmit() {
    // alert('Valid entry')

    if (this.carPriceForm.valid) {
      let car: CarPriceModel = this.carPriceForm.value
      this.carPriceService.addCar(car).subscribe(() => {
        alert('Entry for car price created')
      }
    )
    
    this.carPriceForm.reset()

  }

  }

}
