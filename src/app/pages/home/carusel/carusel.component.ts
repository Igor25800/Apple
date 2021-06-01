import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

import { ICarysel } from 'src/app/shared/interfaces/carysel.interfaces';
import { CaruselService } from 'src/app/shared/services/carusel/carusel.service';

import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit   {

  follow = true;
  enablePan = true;

  index = 2;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  arrCaruser: Array<ICarysel> = []

  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 500,
      number: 1
    },
    {
      width: 700,
      number: 1
    },
    {
      width: 800,
      number: 2
    },
   
    {
      width: 1024,
      number: 2
    },
  ]




  avatars = this.arrCaruser.map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: x,
      title: `${num}`
    };
  });

  // avatars = []

  constructor(
    private caruselServices : CaruselService
  ) {    }

  ngOnInit(): void {
   
    this.getloader()
    // console.log(this.avatars);
    
    
  }


  
 async getloader() {
    this.caruselServices.getCarysel().then(res => {
      //  const el =   res.map(el => el.img)
       this.arrCaruser = res
     
      
    })
  }
  
  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

  indexChanged(index) {
    
  }

}
