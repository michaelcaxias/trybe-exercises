import express, { Request, Response } from "express";

const app = express();
app.use(express.json())

type Port = number | string;

const PORT: Port = process.env.PORT || 8000;


app.get("/users", (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'pessoas usuarias' })
});

app.route("/user").post((req: Request, res: Response) => {
  return res.status(200).json({ message: 'pessoa criada' })
})

app.route("/user/:id")
.get((_req: Request, res: Response) => {
  return res.status(200).json({ message: 'pessoa usuaria' })
})
.put((_req: Request, res: Response) => {
  return res.status(200).json({ message: 'pessoa atualizada' })
})
.delete((_req: Request, res: Response) => {
  return res.status(200).json({ message: 'pessoa deletada' })
});


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});