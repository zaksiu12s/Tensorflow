import fs from "fs";

export default {
  server: {
    host: "0.0.0.0", // This allows access from other devices on the network
    port: 5173, // Or any other port you prefer
    https: {
      key: fs.readFileSync("./localhost+2-key.pem"), // Path to the private key
      cert: fs.readFileSync("./localhost+2.pem"), // Path to the certificate
    },
  },
};
