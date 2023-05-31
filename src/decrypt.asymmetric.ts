import { Buffer } from "node:buffer";
import fs from "node:fs";
import crypto from "node:crypto";

const decryptAsymmetric = async (encryptedData: string) => {
	const privateKeyPem = Buffer.from(
		fs.readFileSync("./key/private.pem", { encoding: "utf-8" })
	);
	const decryptedData = crypto.privateDecrypt({
		key: privateKeyPem,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	}, Buffer.from(encryptedData, "base64"));

	return {
		decryptedData: decryptedData.toString("utf-8")
	}
}

export default decryptAsymmetric;