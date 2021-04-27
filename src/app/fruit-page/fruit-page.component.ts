import { Component, OnInit, HostBinding } from '@angular/core';

import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

@Component({
  selector: 'app-fruit-page',
  templateUrl: './fruit-page.component.html',
  styleUrls: ['./fruit-page.component.scss'],
  animations: [
		trigger('flyInOut', [
			// state('*', style({opacity: 1, transform: 'translateX(0)'})),
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateY(-100%)'
				}),
				animate('0.8s ease-out')
			]),
			transition('* => void', [
				animate('0.8s ease-out', style({
					opacity: 0,
					transform: 'translateY(100%)'
				}))
			])
		])
	]

})
export class FruitPageComponent implements OnInit {

  @HostBinding('@flyInOut')


	active: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
