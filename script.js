var plan = 0;
var planTime = 0;

function planSelect(x) {
    plan = x;
    switch(plan) {
        case 1:
            document.getElementById("basic").style.background="rgb(76, 143, 69)";
            document.getElementById("advanced").style.background="rgb(54, 54, 54)";
            document.getElementById("ultimate").style.background="rgb(54, 54, 54)";
            break;
        case 2:
            document.getElementById("basic").style.background="rgb(54, 54, 54)";
            document.getElementById("advanced").style.background="rgb(76, 143, 69)";
            document.getElementById("ultimate").style.background="rgb(54, 54, 54)";
            break;
        case 3:
            document.getElementById("basic").style.background="rgb(54, 54, 54)";
            document.getElementById("advanced").style.background="rgb(54, 54, 54)";
            document.getElementById("ultimate").style.background="rgb(76, 143, 69)";
            break;
    }
    console.log(plan);
}

function timeSelect(x) {
    planTime = x;
    if(plan !== 0){
        switch(planTime) {
            case 1:
                document.getElementById("dur1").style.background="rgb(76, 143, 69)";
                document.getElementById("dur2").style.background="rgb(54, 54, 54)";
                document.getElementById("dur3").style.background="rgb(54, 54, 54)";
                document.getElementById("dur4").style.background="rgb(54, 54, 54)";
                planTime = 1;
                break;
            case 2:
                document.getElementById("dur1").style.background="rgb(54, 54, 54)";
                document.getElementById("dur2").style.background="rgb(76, 143, 69)";
                document.getElementById("dur3").style.background="rgb(54, 54, 54)";
                document.getElementById("dur4").style.background="rgb(54, 54, 54)";
                planTime = 3;
                break;
            case 3:
                document.getElementById("dur1").style.background="rgb(54, 54, 54)";
                document.getElementById("dur2").style.background="rgb(54, 54, 54)";
                document.getElementById("dur3").style.background="rgb(76, 143, 69)";
                document.getElementById("dur4").style.background="rgb(54, 54, 54)";
                planTime = 6;
                break;
            case 4:
                document.getElementById("dur1").style.background="rgb(54, 54, 54)";
                document.getElementById("dur2").style.background="rgb(54, 54, 54)";
                document.getElementById("dur3").style.background="rgb(54, 54, 54)";
                document.getElementById("dur4").style.background="rgb(76, 143, 69)";
                planTime = 12;
                break;
        }
    }
    console.log(planTime);
}

function HostPlan(name,price,space,transfer,pages,discountMonths){
                this.name = name;
                this.price = price;
                this.space = space;
                this.transfer = transfer;
                this.pages = pages;
                this.discountMonths = discountMonths;
                HostPlan.prototype.calcDiscount=function(percentOfDiscount){
                    var bestPrice = this.price;
                    var currentDate = new Date();
                    console.log("Current Date: " + currentDate);
                    var currentmonth = currentDate.getMonth();
                    console.log(currentmonth);
                    console.log("This Month: " + currentmonth);
                    for (var i = 0; i < this.discountMonths.length; i++) {
                        if (this.discountMonths[i] === currentmonth){
                            bestPrice = this.price * percentOfDiscount;
                            break;
                        }
                    }
                    return bestPrice;
    }

}


var p1 = new HostPlan("Basic", 3.99, 50, 100, 5, [0, 11]);
var p2 = new HostPlan("Advanced", 5.99, 500, 500, 50, [0, 11]);
var p3 = new HostPlan("Ultimate", 9.99, 2000, 3000, 200, [0, 11]);

var totalPrice;

function calcPrice() {
    if(plan > 0 && planTime > 0) { 
        var perc = 0.75;
        var discPrice;
        switch(plan){
            case 1:
                discPrice = p1.calcDiscount(perc);
                break;
            case 2:
                discPrice = p2.calcDiscount(perc);
                break;
            case 3:
                discPrice = p3.calcDiscount(perc);
                break;
            default:
                alert("error");
                break;
        }
        totalPrice = discPrice * planTime;
        alert("Your Hosting Price is: $" + totalPrice + " for the selected duration. Please procede to the login page to start hosting.");
        window.open("loginpage.html", "_self");
    }
    else{
        alert("Please Select a Plan and a Time");
    }
}

function formValidation(){
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var fail = 0;
    var first = document.getElementById("fName").value;
    var last = document.getElementById("lName").value;
    var country = document.getElementById("country").value;
    var addr = document.getElementById("sAddr").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("pNum").value;

    if(first.length > 0 && first.match(letters)){
        if(last.length > 0 && last.match(letters)){
            if(country !== "Select a Country"){
                if(addr.length > 0){
                    if(city.length > 0 && city.match(letters)){
                        if(state !== "Select a State"){
                            if(zip.length === 5 && zip.match(numbers)){
                                if(phone.length === 10 && phone.match(numbers)){
                                    alert("Success");
                                }
                                else if(fail === 0){
                                    alert("Please Enter a Valid Phone Number");
                                    fail = 1;
                                }
                            }
                            else if(fail === 0){
                                alert("Please Enter a Valid ZIP Code");
                                fail = 1;
                            }
                        }
                        else if(fail === 0){
                            alert("Please Enter a State");
                            fail = 1;
                        }
                    }
                    else if(fail === 0){
                        alert("Please Enter a Valid City");
                        fail = 1;
                    }
                }
                else if(fail === 0){
                    alert("Please Enter an Address");
                    fail = 1;
                }
            }
            else if(fail === 0){
                alert("Please Enter a Country");
                fail = 1;
            }
        }
        else if(fail === 0){
            alert("Please Enter a Valid Last Name");
            fail = 1;
        }
    }
    else if(fail === 0){
        alert("Please Enter a Valid First Name");
        fail = 1;
    }
}