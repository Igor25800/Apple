import { Component, OnInit } from '@angular/core';
import { AppleService } from 'src/app/shared/services/apple/apple.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {

  dolar

  constructor(
    private appleServices: AppleService
    ) { }

  ngOnInit(): void {
    
  }


  

}
