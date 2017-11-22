import {Component, OnInit} from '@angular/core';
import {WebsocketService} from './services/websocket.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Todo application';

	constructor(private websoketService: WebsocketService) {
	}

	ngOnInit() {
		this.websoketService.connect()
			.subscribe((result = {}) => {
				console.log(`Root component connected! Status: ${result['status']}`);
			}, err => {
				console.log('Some error occured:', err['message']);
				console.log(err['error']);
			});
	}
}
