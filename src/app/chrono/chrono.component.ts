import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent implements OnInit {
  
  @Input() data !:string;
  
  timeLeft: number = 0;
  interval!:any;



  ngOnInit(): void {

    console.log(this.data)
    ///throw new Error('Method not implemented.');
  }
startTimer() {
    this.interval = setInterval(() => {
      
        this.timeLeft++;
    
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  
}
