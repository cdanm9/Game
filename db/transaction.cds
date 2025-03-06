using {cuid,managed} from '@sap/cds/common';
context config{
    entity Jobs:cuid,managed{
        jobId:String(100);
        name:String(50);
        description:String(200);   
        dayOfWeek:String(5);
        month:String(5);
        dayOfMonth:String(5);
        hour:String(5);
        minute:String(5);
        second:String(5); 
        startTime:Timestamp;
        endTime:Timestamp;  
        active:String(1);
        status:String(50);
        fnCode:String(100);
        srvCode:String(100);
    }
}