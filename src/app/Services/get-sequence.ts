import { TenTimes } from './ten-times' ;
import { Injectable } from "@angular/core";

@Injectable()
export class GetNextSequence {
    sequence : number = 0 ;

    constructor  (private tenMultiplier : TenTimes) {}
    
    getNext() : number {
        this.sequence ++ ;
        // Using Injected service 
        return (this.tenMultiplier.getTentimes(this.sequence)) ;
    }
}