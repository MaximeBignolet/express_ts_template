import express, {Request, Response} from "express";
import * as dotenv from "dotenv"

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Hello world"})
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})