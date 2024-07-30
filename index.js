require ('dotenv').config()
const express = require('express') 
const agendaOnlineRoutes = require('./routes/agendaOnlineRoutes.js') 

const app = express()
const PORT = process.env.PORT || 5001

// Middleware for parsing JSON bodies
app.use(express.json())

// Use the agendaOnlineRoutes
app.use('/api/infomed/agendaOnline', agendaOnlineRoutes)

// Error handling middleware (optional, for better error responses)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

// Create server for HTTP petitions
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})