import { EventEmitter } from '@angular/core';

export class StatusCommunicator { 
    statusChanged = new EventEmitter <string> () ;
}