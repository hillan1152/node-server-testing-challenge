const NFL = require('./nflModel.js');
const db = require('../data/dbConfig');

describe("nfl model", function(){
    beforeEach(async () => {
        await db('teams').truncate();
    });
    describe("add", function() {
        it("This should add a team to the NFL DB", async function() {
            await NFL.add({ team_name: "Bucs" })

            const squad = await db("teams");
            expect(squad).toHaveLength(1);
        })
    })
    describe("delete", function() {
        it("This should delete a team from the NFL DB", async function() {
            await NFL.remove({ id: 1, id: 2 })

            const squad = await db("teams");
            expect(squad).toHaveLength(0);
        })
    })
})