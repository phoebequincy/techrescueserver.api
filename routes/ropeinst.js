'use strict';

const express = require('express')
const knex = require('../knex')
const router = express.Router()


//get all
router.get('/', function(req, res, next) {
  return knex('ropeinst')
  .then ((result) => {
    res.status(200).json(result)
  })
})

//get one
router.get('/:id', function(req, res, next) {
  return knex('ropeinst')
  .where('id', req.params.id)
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})

router.post('/', function(req, res, next) {
  knex('ropeinst')
  .insert({
    name: req.body.name,
    message: req.body.message
  })
  .then(data => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req, res, next) {
  knex('ropeinst')
  .where('id', req.params.id)
  .update(req.body)
  .returning(['id', 'title', 'content', 'src'])
  .then(data => {
    res.send(data[0])
  })
})

router.delete('/:id', function(req, res, next) {
  knex('ropeinst')
  .where('id', req.params.id)
  .returning(['id', 'title', 'content', 'src' ])
  .del()
  .then(data => {
    if (!data) {
      res.send("not found")
    } else {
      res.status(200).json(data[0])
    }
  })
})

module.exports = router;
