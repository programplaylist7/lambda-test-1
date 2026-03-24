import express from "express"
import dotenv from "dotenv"
import route from "./route.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "working fine"
    })
});

app.use("/api", route)

// app.listen(PORT, () => {
//     console.log(`app is running on port ${PORT}`);
// })


export const handler = serverlessExpress({app});