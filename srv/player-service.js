const cds = require('@sap/cds');
const Bree =require('bree');
const Graceful = require('@ladjs/graceful');
module.exports = cds.service.impl(async function (srv) {    
    this.on('implementJob',async (req)=>{   
        try{      
            const bree = new Bree({     
                jobs:[
                    {
                        name:'jobcontrol',
                        cron: '* * * * *',    
                        path:'/home/user/projects/game/srv/jobs/jobcontrol.js',        
                        worker: {
                            workerData: {
                                fnCode: 'getWinningPercentage',
                                srvCode: 'playerService',
                                useWorkerThreads: false  
                            }
                        }
                    },
                    {
                        name:'Losing',     
                        cron: '* * * * *',
                        path:'/home/user/projects/game/srv/jobs/jobcontrol.js',    
                        worker: {
                            workerData: {
                                fnCode: 'getLosingPercentage',
                                srvCode: 'playerService'
                            }
                        }
                    }
                ],
                outputWorkerMetadata:true,
                workerMessageHandler :(response,workerMetdata)=>{
                    console.log(response)
                },
                errorHandler: (error, workerMetadata) => {
                    // workerMetadata will be populated with extended worker information only if
                    // Bree instance is initialized with parameter `workerMetadata: true`   
                    if (workerMetadata.threadId) {
                      console.log(`There was an error while running a worker ${workerMetadata.name} with thread ID: ${workerMetadata.threadId}`)
                    } else {
                      console.log(`There was an error while running a worker ${workerMetadata.name}`)
                    }
                }
            });   
            
            const graceful = new Graceful({ brees: [bree] });
            await graceful.listen();
            await bree.start();

            bree.on('worker created', (name) => {
                console.log('worker created', name);
                console.log(bree.workers.get(name));
              });
              
            bree.on('worker deleted', (name) => {
                console.log('worker deleted', name);
                console.log(!bree.worker.has(name));
            });
            

        }catch(error){       
            let sType=error.code?"Procedure":"Node Js";    
            let iErrorCode=error.code??500;
            req.error({ code:iErrorCode, message:  error.message ? error.message : error });
        }
    })  
    
    
    this.on('getWinningPercentage',async (req)=>{
        try{
            console.log('100% Winning')
            return "100% Winning"   
        }catch(error){   
            let sType=error.code?"Procedure":"Node Js";    
            let iErrorCode=error.code??500;
            req.error({ code:iErrorCode, message:  error.message ? error.message : error });
        }
    })   

    this.on('getLosingPercentage',async (req)=>{
        try{
            console.log('100% Losing')       
            return "100% Losing"   
        }catch(error){   
            let sType=error.code?"Procedure":"Node Js";    
            let iErrorCode=error.code??500;
            req.error({ code:iErrorCode, message:  error.message ? error.message : error });
        }
    })   

    async function winningPercentage(count) {
        
    }

    async function losingPercentage(count) {
        
    }
    
    
    
}
)