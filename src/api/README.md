
## user.json
This file contains the proposed data model for the thrift user 

### Description
```
"accountNunmber" : The primary Key,
"firstName" : "Ajo",
"middleName" : "Abdul",
"lastName"  : "Sola",
"email" :   User can login with either verified email or phone number,
"phoneNumber"   :   User can login with either verified email or phone number,
"verifyCode" : Code sent to user's email/phone for verification
"password" : "encrypted password",
"token" : "authentication token to be recieved after succesful login",
"gender" : "Male",
"dateOfBirth": "12/09/1985",
"bvn"  :    bvn may be needed to verify user,
"active": determines if the user is active
"verified": determines if the user has been verified
"lastLogin" : Date of last login
"address" : "",
"addDate": "12/10/2020"
```

## thrifts.json

The file contains available thrifts that users can subscribe to

### Description
```
"sn": primary key,
"thriftCode" : this can be the primary key
"thriftName" : name of the thrift
"tenor" : Duration of the contribution
"status" : Determines if the thrift is active or not (active thrift would be displayed)
"imageUrl" : image of the thrift type
"addDate": date added
```
        

## contributions.json

The file contains contributions from users/account holder, the contributions depends on the user and thrift type

###  Description
```
"sn": 89,
"thriftCode":foreign key to thrifts,
"accountNumber" : foreign key to user,
"transactionRef" : "er452343241",
"transactionDate" : "12/10/2020",
"subscriptionCode" : 12,       
"Amount":400
```

## subscriptions.json

The list of subscriptions by users 

### Description

```
"subscriptionCode" : primary key,
"subscriptionDate" : "12/5/2020",
"userAccount" : foreign key to user,
"thriftCode": Foreign Key to thrift type,
"startDate": "12/10/2020",
"endDate" : "12/10/2021",
"active" : Determines of the subscription is still active or not, the status would depend on endDate or user action
"amount" : Amount to be paid by user, frequency of payment depends on the tenor of the thrift type,
"addDate" : "10/10/2020"
```

## payment.json

This is the list of payments made to users after the end of of their subscritions





