exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('teams')
    .truncate()
    .then(function() {
      return knex('teams').insert([
        { team_name: 'Giants' },
        { team_name: 'Patriots' },
        { team_name: 'Eagles' },
      ]);
    });
};