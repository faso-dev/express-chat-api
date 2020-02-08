// express app instance
const app = require('express')();

// Listen for the / get request
app.get('/', (req, res) => {
    res.send('Hello')
});
// Listen for the get all resources request
app.get('/api/courses', (req, res) => {
    res.send('Hello')
});
// Listen for the get of specific resource request
app.get('/api/courses/:id', (req, res) => {
    res.send(`GET the ressource with id ${req.params.id}`)
});
// Listen for the post resources request
app.post('/api/courses', (req, res) => {
    res.send('Hello')
});
// Listen for the put resource request
app.put('/api/courses/:id', (req, res) => {
    res.send(`Update the ressource with id ${req.params.id}`)
});
// Listen for the delte resource request
app.delete('/api/courses/:id', (req, res) => {
    res.send(`Delete the ressource with id ${req.params.id}`)
});

// Set the server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
});
