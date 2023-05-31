import http from 'http';
import cors from "cors";
import express, { Application, Request, Response } from "express";

import createKey from "./createkey.asymmetric";
import encryptAsymmetric from "./encrypt.asymmetric";
import decryptAsymmetric from "./decrypt.asymmetric";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createKey();

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ 'status': 'heathy' })
})

app.post("/encrypt", async (req: Request, res: Response) => {
  const plainText = req.body.plainText;
  res.json(await encryptAsymmetric(plainText));
});

app.post("/decrypt", async (req: Request, res: Response) => {
	const { encryptedData } = req.body;
  res.json(await decryptAsymmetric(encryptedData));
});

app.use("*", (req: Request, res: Response) => {
  return res.status(200).json({
    'statusCode': 404,
    'statusName': 'NOT_FOUND',
    'statusMessage': 'The requested resource could not be found.'
  })
});

export const server = http.createServer(app);
server.listen(5003, () => { console.log(`App listening on port 5003`); });