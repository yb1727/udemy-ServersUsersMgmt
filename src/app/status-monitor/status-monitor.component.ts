import { Component, OnInit } from '@angular/core';
import { StatusCommunicator } from '../Services/status-communicator';

@Component({
  selector: 'app-status-monitor',
  templateUrl: './status-monitor.component.html',
  styleUrls: ['./status-monitor.component.css']
})
export class StatusMonitorComponent implements OnInit {

  public status: string ="" ;

  constructor(private statusCommunicator : StatusCommunicator) {
    // subscribing and listening to the data emitter from StatusCommunicator
    this.statusCommunicator.statusChanged.subscribe( 
      (sentStatus: string) => {this.status="Last status received: " + sentStatus}
    );
  }

  ngOnInit() {
  }
}

