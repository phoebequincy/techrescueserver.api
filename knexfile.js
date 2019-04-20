// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/ropeinst'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/ropeinst'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
