import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '  ';

  borrarHeroe() {
 //   this.heroes.shift();
      this.heroeBorrado  = this.heroes.shift() || '';

  }


//  constructor() { 
//    console.log('constructor')
//   }

//  ngOnInit(): void {
//    console.log('ngOnInit')
//  }

}
