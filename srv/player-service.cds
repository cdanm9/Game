using {game} from '../db/master';
using {config} from '../db/transaction';

service playerService {
    entity Characters as projection on game.Characters;
    entity Weapons as projection on game.Weapons;  
    entity Artifacts as projection on game.Artifacts;

    entity Functions as projection on game.Functions;
    function getWinningPercentage() returns many String;
    function getLosingPercentage() returns many String;  
    entity Jobs as projection on config.Jobs;  
    type jobType:{
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
    // type functionPayload:{
    //   FN_NAME:String(100);
    //   SRV_NAME:String(100);
    // }    
    
    // function implementJob(jobData:many jobType) returns many String;   
    function implementJob() returns many String; 
}
