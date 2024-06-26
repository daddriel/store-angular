import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration:number = 0;
  @Input({required:true}) message:string = '';
  counter = signal(0);
  counterRef: number | undefined
  constructor(){
    //NO ASYNC
    //before render
    console.log('constructor')
    console.log('_'.repeat(20));

  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnChanges')
    console.log('_'.repeat(20));
    console.log('changes')
    console.log(changes)
    const duration  = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
    console.log(duration)
  }
  ngOnInit(){
    //after render
    // one time
    // async, then, subs
    console.log('ngOnInit');
    console.log('_'.repeat(20));
    console.log('duration= ' + this.duration );
    console.log('message= ' + this.message );
    this.counterRef = window.setInterval(()=>{
      this.counter.update(statePrev => statePrev + 1);
      console.log('run interval ')
    }, 1000);


  }
  ngAfterViewInit(){
    //after render
    //hijos ya fueron pintados
    console.log('ngAfterViewInit')
    console.log('_'.repeat(20));

  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
    console.log('_'.repeat(20));
    window.clearInterval(this.counterRef)
  }
  doSomething(){
    console.log('change duration')
    //async
  }
}
