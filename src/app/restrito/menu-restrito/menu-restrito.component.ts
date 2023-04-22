import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent{

  constructor(private router: Router) {}

	logout() {
		localStorage.clear();
		this.router.navigate(['/login']);
	}
}
