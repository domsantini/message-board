import express from 'express';
// Create an instance of express router
const router = express.Router()

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "YEW World!",
    user: "Kilgore",
    added: new Date()
  },
];

// Get messages
router.get('/', (req, res) => {
      
  if (!messages) {
    // Set the status code ourselves, 400s for something wonky
    res.status(404).json('No messages found')
  }
  
  // Setting status here to 200 for success
  res.status(200).json(messages)
})

// Create new message
router.post('/', (req, res) => {
  
  
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }
  
  messages.push(newMessage)
  
  res.status(201).json(messages)
})

export default router;