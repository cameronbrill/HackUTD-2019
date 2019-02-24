import requests as r

omg = r.post('http://10.142.0.2:3000/neighborhood', data = {'name': "Cameron", 'ethnicity': "White", 'age': 18, 'sex': "Male", 'travel': "no", 'travel_time':"Once a day", 'num_adults':6, 'num_children':82, 'health':"good", 'education_level': "College", 'address': "Penis", 'household_income': 820000, 'credit_score':850})




got = r.get('http://10.142.0.2:3000/neighborhood')

print(got.status_code)

print(got.headers['content-type'])
print(got.encoding)
print(got.text)
print(got.json())



