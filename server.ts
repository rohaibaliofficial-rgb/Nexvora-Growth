import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log("New Contact Form Submission:", { name, email, subject, message });
    
    // Here you would typically send an email or save to a database
    // For now, we'll just return a success response
    res.status(200).json({ 
      success: true, 
      message: "Message received! Our team will contact you soon." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log("-----------------------------------------");
    console.log(`🚀 GROWTH SERVER RUNNING: http://localhost:${PORT}`);
    console.log("-----------------------------------------");
  });
}

startServer();
