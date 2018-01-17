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
    knex('goals').insert({
        user_id: 2, 
        title:'Do React Project',
        description:'work on a full-stack app using React', 
        due_date:'11-30-17', 
        completed:'F'}),

     knex('goals').insert({
        user_id: 1, 
        title:'Do Angular Project',
        description:'work on a full-stack app using Angular', 
        due_date:'12-01-17', 
        completed:'F'}),

      knex('goals').insert({
        user_id: 2, 
        title:'Do Vue Project',
        description:'work on a full-stack app using Vue', 
        due_date:'11-28-17', 
        completed:'F'}),

        knex('goals').insert({
        user_id: 4, 
        title:'Do Ruby Project',
        description:'work on a full-stack app using Ruby', 
        due_date:'12-10-17', 
        completed:'F'}),

        knex('goals').insert({
        user_id: 1, 
        title:'Do Python project',
        description:'work on a full-stack app using python', 
        due_date:'12-19-17', 
        completed:'F'}),

        knex('goals').insert({
        user_id: 1, 
        title:'Do MongoDB project',
        description:'work on a full-stack app using MongoDB', 
        due_date:'12-20-17', 
        completed:'F'}),

        knex('goals').insert({
        user_id: 4, 
        title:'Do PHP project',
        description:'work on a full-stack app using PHP', 
        due_date:'12-21-17', 
        completed:'F'}),

        knex('goals').insert({
        user_id: 5, 
        title:'Do C++ project',
        description:'work on a full-stack app using C++', 
        due_date:'12-22-17', 
        completed:'F'})

  );
};
