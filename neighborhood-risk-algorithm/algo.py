cspercent = .2
dppercent = .1

def userfails(income, expenses, total_cost, payment_period):
    return (income-expenses)-total_cost/12<2000;


def risk(income, expenses, total_cost, payment_period, fico, downp):
    if (expenses > income):
        return 0
    net_income = (income-expenses)/12
    if (userfails(income, expenses, total_cost, payment_period)):
        return 0
    ratio = total_cost/payment_period/net_income
    result = 0
    if (ratio>=4):
        result = 100
    elif (ratio <=1):
        result = 10
    else:
        p = (ratio-1)/2
        ratio = p*9+10
    csresut = 0
    if (fico>850):
        csresult = 100
    elif (fico<=500):
        csresult = 0
    else:
        p = (fico-500)/350
        csresult = p*100
    
    result+=csresult*cspercent
    
    dpresult = 0
    if (downp>=0.9):
        csresult = 100
    elif (downp<=0.2):
        csresult = 0
    else:
        p = (downp-.2)/.7
        dpresult = p*100
    result+= dpresult*dppercent
    return result

print(risk(100000,9000,100,40,750,0.4))

