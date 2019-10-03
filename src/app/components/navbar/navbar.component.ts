import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  mensaje: string = 'Navbar';

  private nombreSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.nombreSubscription = this._dataService.nombre$.subscribe((r: string) => this.mensaje = r);
  }

  ngOnDestroy(): void {
    this.nombreSubscription.unsubscribe();
  }

}
