const request = require('supertest');
const db = require('')
const nfl = require("./nfl.js")

describe("NFL TEAMS", function(){
    describe("environment", function(){
        it("should set environment to testing", function() {
            expect(process.env.DB_ENV).toBe("testing");
          });
    });
    describe("POST /", function(){
        it("Should return 201 Created", function(){
            return request(nfl)
                .post('/')
                .send({ id: 1, team_name: "PATS" })
                .then(response => {
                    expect(response.status).toBe(201);
                    })
                });
        it('Should return message: Cannot add team', function(){
            return request(nfl)
                .post('/')
                .then(response => {
                    expect(response.body.message).toBe("Cannot add team")
                })
        })
        })
})

// return request(nfl)
// .post("/")
// .send({ team_name: "Seahawks" })
// .set('Accept', 'application/json')
// .expect('Content-Type', /json/)
// .then(res => {
//     expect(res.status).toBe(201)
// })

// .expect(function(res){
//     res.body.id = 4;
//     res.body.team_name = res.body.team_name;
// })    
// .expect(201, {
//     id: 4,
//     team_name: "Seahawks"
// })     