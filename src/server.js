import { createServer } from "http";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;

const server = createServer((_, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Simple Node ! 🎁⚡️');
    res.end();
});

server.listen(PORT, () => {
    console.info(`🦍 Server listening on port http://localhost:${PORT}/`);
})