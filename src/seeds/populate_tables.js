exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    // TODO: DELETE ALL ENTRIES IN EXISITING TABLES
    knex('goals').del(),

    // Insert seed entries
    knex('users').insert({username: 'alice', password: 'mypickles'}), // :(
    knex('users').insert({username: 'bob', password: 'bananabread'}),
    knex('users').insert({username: 'martha', password: 'bluecheese'}), 
    knex('users').insert({username: 'polly', password: 'friedeggs'}), 
    knex('users').insert({username: 'fagin', password: 'meltedbutter'}),
    knex('users').insert({username: 'felicia', password: 'sourdough'}),
    // TODO: INSERT DATA INTO TABLES
    knex('goals').insert({user_id: 2, description: 'run in a 5k'}),
    knex('goals').insert({user_id: 1, description: 'clean room'}),
    knex('goals').insert({user_id: 1, description: 'send thank you letter'}),
    knex('goals').insert({user_id: 5, description: 'meditate daily'}),
    knex('goals').insert({user_id: 6, description: 'get portrait done'}),
    knex('goals').insert({user_id: 5, description: 'paint something'}),
    knex('goals').insert({user_id: 4, description: 'climb mount everest'})

  );
};
