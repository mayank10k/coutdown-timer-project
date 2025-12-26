const endDate=new Date("26 dec,2025 13:09:00").getTime();
const startDate=new Date().getTime();



//calls the function in every secs
let x=setInterval(function updateTimer(){
    const curr=new Date().getTime();

    // distance will be in mini seconds
    const distanceCovered=curr-startDate;
    const distancePending=endDate-curr;

    //calculate days,hours,mins,secs
    //1day=24*60*60*1000 ms
    const oneDayInMillis=(24*60*60*1000);
    const oneHourInMillis=(60*60*1000);
    const oneMinInMillis=(60*1000);
    const oneSecInMillis=(1000)

    const days= Math.floor(distancePending / (oneDayInMillis));
    const hrs=Math.floor(distancePending % (oneDayInMillis)/(oneHourInMillis))
    const mins=Math.floor(distancePending % (oneHourInMillis)/(oneMinInMillis))
    const secs=Math.floor(distancePending % (oneMinInMillis)/(oneSecInMillis))

    //populae in UI
    document.getElementById("days").innerHTML=days;
    document.getElementById("hrs").innerHTML=hrs;
    document.getElementById("min").innerHTML=mins;
    document.getElementById("sec").innerHTML=secs;

    //calculate width percentage for progress bar\
    const totalDistance=endDate-startDate;

    const percentageDistance=(distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width=percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";
    }
},1000); //time is in ms