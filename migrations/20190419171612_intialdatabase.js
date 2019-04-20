'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('techins', (table) => {
    table.increments() // id
    table.string('title').notNullable()
    table.text('content').notNullable()
    table.string('src').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('techins')
}
