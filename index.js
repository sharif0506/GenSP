import app from "./app.js";


const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
        process.exit(1);
    }
    console.log(`Server running on port ${PORT}`);
});