import express from 'express'
 const app = express();

 app.get('/' ,( req , res) =>{
    res.send('sever is ready')
 });
 app.get('/home' ,( req , res) =>{
   res.send('sever is ready at home ')
});

app.get('/api/jokes' , (req, res) =>{
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      id: 2,
      title: "Math Joke",
      content: "Why was the math book sad? Because it had too many problems."
    },
    {
      id: 3,
      title: "Science Joke",
      content: "Why did the biologist install a doorbell? Because he wanted to hear the cell membrane."
    }
  ];

    res.send(jokes);

}) 
 const port =  4000;

 app.listen(port , () =>{
    console.log(`serve at http://localhost:${port}`)
 })