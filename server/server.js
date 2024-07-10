import express from 'express'
import messages from './routes/messages.js'
// Create express instance
const app = express();

// Set up our first api route
// Commenting out bc we are moving this to router file
// app.get('/api/messages', (req, res) => {
  
//   if (!messages) {
//     // Set the status code ourselves, 400s for something wonky
//     res.status(404).json('No messages found')
//   }
  
//   // Setting status here to 200 for success
//   res.status(200).json(messages)
// })

// Body parser middleware
// Allows us to send json, or urlencoded post requests and will format data for us
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', messages)

app.listen(5000, () => { console.log(`Server running on port 5000`)})