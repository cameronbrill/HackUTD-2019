//payment period in months

const cspercent = 0.2;
const dpprecent = 0.1;



function risk(income, expenses, total_cost, payment_period, fico, downp, userfails) {
    
    if (expenses > income) return 0;
    var netincome = (income-expenses)/12;
    if (userfails(income, expenses, total_cost, payment_period)) return 0;
    var ratio = total_cost/payment_period/netincome;
    var result =0;
    if (ratio>=4) result=100;
    else if (ratio <=1) result =10;
    else {
        var p = (ratio-1)/3;
        ratio= p*9+10;
    }
    var csresult =0;
    if (fico>=850) csresult=100;
    else if (fico <=500) csresult =0;
    else {
        var p = (fico-500)/350;
        csresult = p*100;

    }

    result+= csresult*cspercent;
    
    var dpresult =0;
    if (downp>=0.9) csresult=100;
    else if (downp <=0.2) csresult =0;
    else {
        var p = (downp-0.2)/0.7;
        dpresult = p*100;

    }
    result+= dpresult*dpprecent;

    return result;

}

console.log(risk(100000,9000,1500000,40,750,0.4, function(income, expenses, total_cost) {
    return (income-expenses)-total_cost/12 < 2000;
}));