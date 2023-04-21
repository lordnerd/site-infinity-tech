import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

	mostrarMenu: boolean = true;

	constructor(private _loginService: LoginService) {}

	ngOnInit() {
		this._loginService.getMostraMenu().subscribe((res) => {
			this.mostrarMenu = res;
		});
	}
	ngOnDestroy() {
		localStorage.clear();
	}

}
