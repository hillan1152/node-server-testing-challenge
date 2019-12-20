const request = require('supertest');

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
                .send({ team_name: 'bucs' })
                // .set('Accept', 'application/json')
                // .expect('Content-Type', /json/)
                // .expect(201)
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