'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ropeinst').del()
      .then(function() {
          // Inserts seed entries
          return knex('ropeinst').insert(
            [
              {
                id: 1,
                title: "LOAD SHARING ANCHOR (Cordelette Anchor)",
                content: "A load sharing anchor system (Figure 108) distributes the load between two or more anchor points, but not precisely evenly.  The key distinction from a load-distributing anchor is that the legs of the anchor system are a fixed length and will not adjust once rigged. This distinction makes it a superior technique for rigging rescue anchor systems, because it provides for no extension of the focal point in the event one leg (single point) fails, thereby reducing the potential for a shock force to be generated within the anchor system. The load-sharing anchor system or 'cordelette' is easily constructed with a ten meter (33 feet) length of 7 mm or 8 mm cord. It may also be constructed with nylon webbing or Spectra runners.  Once all anchor points are clipped in and the load is distributed evenly, the middle of the load-sharing anchor is tied off with a Figure Eight Knot or Overhand Knot. NOTE: The advantage of the load-sharing anchor system is that it if one leg of the anchor system fails, there is no 'extension' and shock forces are minimized on the remaining anchor points.",
                src: "/images/cordellete-illustration.jpg",
              }
            ])
              .then(() => {
                return knex.raw("SELECT setval('ropeinst_id_seq', (SELECT MAX(id) FROM ropeinst));"
              )
          })
      })
  }
