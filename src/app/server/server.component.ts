import { Component, Input, EventEmitter, Output } from '@angular/core';
import {GetNextSequence} from '../Services/get-sequence'
import { StatusCommunicator } from '../Services/status-communicator';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  })

export class ServerComponent {
  public seq: number ;
  public serverStatusOnline = true;
  @Input() serverElement: {id: string, status: string, type: string } ;
  @Output()  serverStatusChanged = new EventEmitter <{type: string, status: string}> () ;

  constructor ( private seqService: GetNextSequence, private statusCommunicator : StatusCommunicator) {
    this.seq = this.seqService.getNext(); // using a service added in the parent server-manager, 
                                          // to get next sequence
  };

  onServerTurnOnOff() {
    
    this.serverStatusOnline = !this.serverStatusOnline;
    if (this.serverStatusOnline) {
        this.serverElement.status = 'online' ;
    } else {
        this.serverElement.status = 'offline' ;
    }
    // Emitting data to parent server-manager using serverStatusChanged which is decalred with @Output
    this.serverStatusChanged.emit ({type: this.serverElement.type, status: this.serverElement.status})
    
    // Emitting data to StatusMonitorComponent via the StatusCommunicator service
    this.statusCommunicator.statusChanged.emit(this.serverElement.status) ;

  }
}
