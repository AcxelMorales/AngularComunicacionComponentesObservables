import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor(private _dataService: DataService) { }

  public cambiarNombre(): void {
    this._dataService.nombre$.emit('Angular !!!');
  }

}
