function StopWatch() {
    let durationObject={}
    
    this.start = function () {
       if (!durationObject.started) {
        let curtime = new Date();
        let initial = curtime.getTime();
        durationObject.initial = initial
        durationObject.started = true;
        durationObject.stopped = false;
       }
       else{
        throw new Error("Stop Watch is already started");
       }
    }
    
    this.stop = function () {
        if (!durationObject.stopped && durationObject.started)  {
            let final = new Date();
            let finalTime = final.getTime();
            durationObject.final = finalTime;
            durationObject.stopped = true;
            durationObject.started = false;
        }else if(!durationObject.started){
            throw new Error("StopWatch is not started");
        }
    }
    Object.defineProperty(this , 'duration',{
        get : function () {
            if(durationObject.stopped){
                let time = durationObject.final - durationObject.initial;
                let minutes = Math.floor(time / (60 * 1000)); 
                time %= 60 * 1000;
                let seconds = Math.floor(time / 1000); 
                time %= 1000;
                return {minutes,seconds,milliseconds : time}
            }
            throw new Error("The StopWatch has not stopped")
        }
    })
}