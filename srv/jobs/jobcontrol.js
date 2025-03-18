const { parentPort,workerData } = require('worker_threads');
const cds = require("@sap/cds");      
module.exports=(async (workerData,cds) => {
    if(workerData){
        let playerService=await cds.connect.to(workerData.srvCode);
        let execFunction=await playerService.send(workerData.fnCode,{});   
    }


    // send emails
    // console.log(srv);
    
    // await Promise.all(
    //     var a=1;
    // );
  
    // signal to parent that the job is done
    if (parentPort) parentPort.postMessage('done');
    // else process.exit(0);
  })(workerData,cds);