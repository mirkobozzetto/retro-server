import crypto, { randomBytes } from "crypto";

export const random = () => crypto.randomBytes(128).toString("base64");
