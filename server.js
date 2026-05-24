const http = require('http');

const PORT = 3000;

// HTML Templates
const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Node.js Server</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #6366f1;
            padding-bottom: 10px;
        }
        nav {
            margin: 20px 0;
            padding: 15px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }
        nav a {
            color: #6366f1;
            text-decoration: none;
            margin-right: 20px;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .content {
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 5px;
            border-left: 4px solid #6366f1;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Node.js Server</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
    <div class="content">
        <p>This is a simple HTTP server built with pure Node.js core modules.</p>
        <p><strong>Features:</strong></p>
        <ul>
            <li>Uses http module (no Express)</li>
            <li>Handles routing for multiple paths</li>
            <li>Sets proper HTTP headers and status codes</li>
            <li>Returns formatted HTML content</li>
            <li>Handles 404 errors for undefined routes</li>
        </ul>
        <p>The server is running on port 3000.</p>
    </div>
</body>
</html>
`;

const aboutPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Node.js Server</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #6366f1;
            padding-bottom: 10px;
        }
        nav {
            margin: 20px 0;
            padding: 15px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }
        nav a {
            color: #6366f1;
            text-decoration: none;
            margin-right: 20px;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .content {
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 5px;
            border-left: 4px solid #6366f1;
        }
        .info-box {
            background-color: #e0e7ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>About This Server</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
    <div class="content">
        <p>This server demonstrates the power of Node.js core modules.</p>
        
        <div class="info-box">
            <h3>Technical Details:</h3>
            <ul>
                <li><strong>Module:</strong> http (Node.js core)</li>
                <li><strong>Port:</strong> 3000</li>
                <li><strong>Routing:</strong> Custom implementation</li>
                <li><strong>Content Type:</strong> text/html</li>
            </ul>
        </div>
        
        <p><strong>How it works:</strong></p>
        <ol>
            <li>Server listens on port 3000</li>
            <li>When a request comes in, it checks the URL path</li>
            <li>Based on the path, it returns different HTML content</li>
            <li>Proper HTTP status codes and headers are set</li>
            <li>Response ends with res.end()</li>
        </ol>
        
        <p>This is a pure Node.js implementation without any external frameworks like Express.js.</p>
    </div>
</body>
</html>
`;

const notFoundPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            line-height: 1.6;
            text-align: center;
        }
        h1 {
            color: #dc2626;
            font-size: 4rem;
            margin: 0;
        }
        .error-container {
            background-color: #fef2f2;
            padding: 40px;
            border-radius: 10px;
            border: 2px solid #dc2626;
        }
        nav {
            margin: 20px 0;
            padding: 15px;
            background-color: #f4f4f4;
            border-radius: 5px;
            display: inline-block;
        }
        nav a {
            color: #6366f1;
            text-decoration: none;
            margin: 0 10px;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <nav>
            <a href="/">Go to Home</a>
            <a href="/about">Go to About</a>
        </nav>
    </div>
</body>
</html>
`;

// Create server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    
    // Routing logic
    if (req.url === '/' || req.url === '/home') {
        // Home page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    } 
    else if (req.url === '/about') {
        // About page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(aboutPage);
    } 
    else {
        // 404 - Page not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFoundPage);
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
    console.log('\nAvailable routes:');
    console.log(`  - http://localhost:${PORT}/ (Home)`);
    console.log(`  - http://localhost:${PORT}/about (About)`);
});
