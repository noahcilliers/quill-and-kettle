import { app } from "./server";

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => console.log(`Quill & Kettle API on http://localhost:${port}`));
