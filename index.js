import { app } from "./app.js";
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server has been started on port: ${port}`));
