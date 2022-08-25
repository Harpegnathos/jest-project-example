const request = require('supertest')

const booking = {
    firstname : 'Jim',
    lastname : 'Brown',
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : '2018-01-01',
        checkout : '2019-01-01'
    },
    additionalneeds : "Breakfast"
}

describe('creates booking', () => {
    test('returns expected response', (done) => {
        request('https://restful-booker.herokuapp.com')
        .post('/booking')
        .send(booking)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            console.log(response.body.bookingid);
            expect(response.statusCode).toBe(200)
            expect(response.body.bookingid).not.toBe(null)
            expect(response.body.booking.firstname).toBe(booking.firstname)
            expect(response.body.booking.lastname).toBe(booking.lastname)
            expect(response.body.booking.totalprice).toBe(booking.totalprice)
            expect(response.body.booking.depositpaid).toBe(booking.depositpaid)
            expect(response.body.booking.bookingdates.checkin).toBe(booking.bookingdates.checkin)
            expect(response.body.booking.bookingdates.checkout).toBe(booking.bookingdates.checkout)
            expect(response.body.booking.additionalneeds).toBe(booking.additionalneeds)
            done();
        })
    })
})