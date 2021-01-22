


// ========***Convert from Kilometers to Meters***========//

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (meter < -1) {
        return "Distance cannot be negative";
    } else {
        return meter;
    }
}


// ========***Budget Calculator********===================//

function budgetCalculator(watch, phone, laptop) {
    if (watch <= -1 || phone <= -1 || laptop <= -1) {
        return "Choose the product correctly";
    } else {
        var watch = watch * 50;
        var phone = phone * 100;
        var laptop = laptop * 500;
        var total = watch + phone + laptop;
        return total;

    }

}



// =============***Hotel Cost*****====================//

function hotelCost(days) {
    var totalPay = 0;
    if (days <= -1) {
        return "The day is not acceptable";
    } else if (days <= 10) {
        totalPay = days * 100;

    } else if (days <= 20) {
        var basicPay = 10 * 100;
        var remainingDays = days - 10;
        var firstDiscount = remainingDays * 80;
        totalPay = basicPay + firstDiscount;
    } else {
        var basicPay = 10 * 100;
        var firstDiscount = 10 * 80;
        var remainingDays = days - 20;
        var secondDiscount = remainingDays * 50;
        totalPay = basicPay + firstDiscount + secondDiscount;

    }
    return totalPay;
}



// ===================***Mega Friend***===========================//

function megaFriend(friendsName) {
    var largerName = "";
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element == "") {
            return "Please enter your friend's name";
        }
       
        else if (element.length > largerName.length) {
            largerName = element;
        }
    }
    return largerName;
}



