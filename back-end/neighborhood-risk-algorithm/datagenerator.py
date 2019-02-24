import numpy as np
import random
import csv
import time
import datetime
places = {"Highland Park": [75205, 75209, 75219, 75283, 75284, 75391],
          "University Park": [75025, 75225, 75275],
          "Richardson": [75080, 75081, 75082, 75083, 75085],
          "Plano": [75023, 75025, 75034, 75086, 75094, 75024, 75026, 75074, 75084, 75093, 75252],
          "Preston Hollow": [75230, 75229, 75225, 75220]}
names = ["John", "Tom", "Bob"]

cities = list(places)
people = []
num_entries = 50000

def create_person():
    location = cities[random.randint(0, len(places) - 1)]  # done
    # zipcode = places[location][random.randint(0, len(places[location]) - 1)]  # done
    name = names[random.randint(0, len(names) - 1)]
    income = np.random.normal(60000, 15000)
    expenses = np.random.normal(income * .7, 10000)
    total_cost = np.random.normal(400000, 100000)
    payment_period = np.random.normal(180, 50)
    fico_score = np.random.normal(650, 75)
    downpayment = random.randint(0, 10) * .1
    date = datetime.datetime.today().strftime('%Y-%m-%d')
    index = np.random.normal(50, 13)
    fail_test = 10 <= index <= 90

    return [str(location), str(name), str(income), str(expenses), str(total_cost), str(payment_period), str(fico_score), str(downpayment), str(date), str(fail_test), str(index)]


with open('data_set_' + str(time.time()) + '.csv', mode="w") as csv_file:
    writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["zip", "name", "income", "expenses", "total_cost", "payment_period", "fico", "downpayment", "date", "fail", "index"])
    for i in range(num_entries):
        writer.writerow(create_person())

