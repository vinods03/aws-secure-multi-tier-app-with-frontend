import { Component, OnInit } from '@angular/core';
import { DiamondPriceServiceService } from '../mlforms/diamond-price-service.service';
import { DiamondPriceModel } from '../models/diamond-price-model';

@Component({
  selector: 'app-diamond-price-list',
  templateUrl: './diamond-price-list.component.html',
  styleUrls: ['./diamond-price-list.component.css']
})

export class DiamondPriceListComponent implements OnInit {

  diamondEntries: DiamondPriceModel[] = []

  constructor(private diamondPriceService: DiamondPriceServiceService) {}

  ngOnInit(): void {
    this.diamondPriceService.getDiamonds().subscribe(diamonds => {
     this.diamondEntries = diamonds 
    }
    )
  }

}
