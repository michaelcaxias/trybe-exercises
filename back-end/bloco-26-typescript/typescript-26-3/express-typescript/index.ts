import express, { Request, Response } from "express";

const app = express();
app.use(express.json())

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send('Algo aqui')
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});