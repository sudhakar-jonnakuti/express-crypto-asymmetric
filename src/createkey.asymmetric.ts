import fs from "node:fs";
import { generateKeyPairSync } from "node:crypto";

const createKey = (): void => {
	const { publicKey, privateKey } = generateKeyPairSync("rsa", { modulusLength: 1024 });

	const publicKeyPem = publicKey.export({ type: "spki", format: "pem" });
	fs.openSync('./key/public.pem', 'w');
	fs.writeFileSync('./key/public.pem', publicKeyPem, { encoding: "utf-8" });

	const privateKeyPem = privateKey.export({ type: "pkcs8", format: "pem" });
	fs.openSync('./key/private.pem', 'w');
	fs.writeFileSync("./key/private.pem", privateKeyPem, { encoding: "utf-8" });
}

export default createKey;
