const expressAsyncHandler = require('express-async-handler')

const dameAgendas = expressAsyncHandler(async () => {
  try {
    console.log('Dame AGENDAS')
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = { dameAgendas }
