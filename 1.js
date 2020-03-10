var account=function Account(){
     var accountName="name";
     var accountType="type";
     var counter=0;
     var acc=function AccountClosure(){
         var accountNameDetails=accountName;
         var accountTypeDetails=accountType;   
         counter=counter+1;  
         var returnValue={a:accountNameDetails,b:accountTypeDetails,c:counter}   ;
         return returnValue;
    };
    return acc;
};

var testAccountCreated1= account;
var y=testAccountCreated1();
console.log(y);//This will log as the inner function;
var x=y();//executing the returned function, getting hold of the object
console.log(x.a);//Here we get one of the values of the object
console.log(x.b);
console.log("LOGGING COUNTER")
console.log(x.c);
var j1=y();
console.log("LOGGING COUNTER")
console.log(j1.c);

var testAccountCreated2= account;
var y=testAccountCreated2();
console.log(y);//This will log as the inner function;
var x=y();//executing the returned function, getting hold of the object
console.log(x.a);//Here we get one of the values of the object
console.log(x.b);
console.log("LOGGING COUNTER")
console.log(x.c);
var j1=y();
console.log("LOGGING COUNTER")
console.log(j1.c);