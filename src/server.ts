import app from "./app.js";
import { env } from "./config/environment.js";

const port = env.port;

app.listen(port, () => {
  console.log(`${env.appName} listening on http://localhost:${port} (${env.nodeEnv})`);
});
