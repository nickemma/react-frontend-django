const express = require('express');
const app = express();

const courses = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
  { id: 3, name: 'cool' },
];

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('the id does not exit');
  res.send(course);
});

app.post('/api/course', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  course.push(course);
  res.send(course);
});
// ===== setting up dynamic environment port ====
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
