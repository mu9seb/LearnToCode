window.onload = function() {

}

function createReservation(event) {
    event.preventDefault();

    // creating a reservation object
    const reservation = {}
    reservation.roomType = getSelectedRoomType();
    reservation.roomRate = getRoomRate(reservation.roomType);
    reservation.discountRate = getDiscountRate();
    reservation.stayLengthNights = document.getElementById("numNightsStayInput")
    reservation.date = getReservationDate()
    reservation.total;

    console.log(reservation);
    // display output
}

function getSelectedRoomType() {
    const isKing = document.getElementById("roomTypeKing").checked;
    const isQueen = document.getElementById("roomTypeQueen").checked;
    const isSuite = document.getElementById("roomTypeSuite").checked;

    if (isKing) {
        return "King";
    } else if (isQueen) {
        return "Queen";
    } else {
        return "Suite";
    }
}

function getRoomRate(roomType) {
    if (isPeakSeason()) {
        switch (roomType) {
        case "Queen":  
        case "King":
            return 250;
        case "Suite":
            return 350;
        }
    } else {
        switch (roomType) {
            case "Queen":    
            case "King":
                return 150;
            case "Suite":
                return 210;
        }
    }
    
    
}

function getDiscountedAmount (roomRate) {
    const isMilitary = document.getElementById("discountTypeMilitary").checked;
    const isSenior = document.getElementById("discountTypeSenior").checked;

    if (isMilitary) {
        return 0.2;
    } else if (isSenior) {
        return 0.1;
    }
}

function isPeakSeason () {
    const reservationDate = getReservationDate();
    const month = reservationDate.getUTCMonth();

    return (month >=5 && month <= 7);

    switch (month) {
        case 5:
        case 6:
        case 7:
            return true;
        default:
            return false;
    }
}

function getReservationDate() {
    const selectedDate = new Date(document.getElementById("orderDateInput").value);

    // reformat date value

    return selectedDate;
}