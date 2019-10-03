import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';

/**
 * Lo comentado es la forma anterior de llegar a el resultado
 */

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = 'Mensaje';

  // private nombreSubscription: Subscription = new Subscription();

  constructor(public _dataService: DataService) { }

  ngOnInit(): void {
    // this.nombreSubscription = this._dataService.nombre$.subscribe((r: string) => {
    //   console.log('hijo', r);
    //   this.mensaje = r;
    // });
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy Hijo');
    // this.nombreSubscription.unsubscribe();
  }

}
