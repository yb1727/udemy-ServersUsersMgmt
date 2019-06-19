import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {GetNextSequence} from '../Services/get-sequence'

@Component({
    selector: 'app-servers-manager',
    templateUrl: './servers-manager.component.html',
    styleUrls: ['./servers-manager.component.css'],
    providers: [GetNextSequence] // Adding this service so that all child server components can use it
})
export class ServersManagerComponent implements OnInit {
    dataCenter = '';
    allowServer = false;
    serverName = 'Add server here';
    serverType = 'Production';
    serverCreated = false;
    serverList = [];
    prodOnline = 0; // number of production servers which are online
    testOnline = 0; // number of test servers which are online
    @ViewChild('DataCenterNameInput') dcname: ElementRef;

    constructor() {
        console.log ("servers manager constructor called") ;
        setTimeout(() => {
            this.allowServer = true;
        }, 2000);
    }
    ngOnInit() {
    }

    onDataCenterName() {
        this.dataCenter = this.dcname.nativeElement.value;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverList.push({ id: this.serverName, status: 'online', type: this.serverType });
        if (this.serverType === 'Production') {
            this.prodOnline++;
        } else {
            this.testOnline++;
        }
    }

    onServerTypeChange() {
        if (this.serverType === 'Production') {
            this.serverType = 'Test';
        } else {
            this.serverType = 'Production';
        }
    }


    onServerStatuschanged(inServerStatus: { type: string, status: string }) {
        if (inServerStatus.type === 'Production') {
            if (inServerStatus.status === 'online') {
                this.prodOnline++;
            } else {
                this.prodOnline--;
            }
        } else {
            if (inServerStatus.status === 'online') {
                this.testOnline++;
            } else {
                this.testOnline--;
            }
        }
    }
    /*  ***** commneted out ******
      onUpdateServerName (event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value ;
        // console.log (event) ;
      }
    */
}
