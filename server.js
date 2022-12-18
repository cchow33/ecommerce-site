

// 1) Handle GET requests:
router.get('/', (req, res) => {
  res.status(200).json({
    // return following object:
    message: 'Handling GET requests to /products'
  });
});


// Handle login request from user
router.post('/login', (req, res) => {
  if(req.login.username && req.login.password){
    let user = users.find((user) => {
      return (
        user.login.username === req.login.username &&
        user.login.password === req.login.password  
      )
    });
  } else {
    response.writeHead(401, 'Invalid username or password');
    return response.end();
  }
})