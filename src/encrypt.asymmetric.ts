import { Buffer } from "node:buffer";
import fs from "node:fs";
import crypto from "node:crypto";

const encryptAsymmetric = async (plainText: string) => {
	const publicKeyPem = Buffer.from(
		fs.readFileSync("./key/public.pem", { encoding: "utf-8" })
	);
	const encryptedData = crypto.publicEncrypt({
		key: publicKeyPem,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	}, Buffer.from(plainText));

	return {
		encryptedData: encryptedData.toString('base64')
	};
}

export default encryptAsymmetric;