const app = require("./app");
const connectDatabase = require("./db/db");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception`);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION ") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Connect to database
connectDatabase();

//   Server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejections`);

  server.close(() => {
    process.exit(1);
  });
});
