// Request logging middleware
export const requestLogger = (req, res, next) => {
  // Log incoming requests with timestamp, method, URL, and IP
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  
  // Store start time for response logging
  req.startTime = Date.now();
  
  next();
};

// API response logger
export const responseLogger = (req, res, next) => {
  // Log response status and duration
  const duration = Date.now() - req.startTime;
  const status = res.statusCode;
  
  console.log(`Response: ${status} - ${duration}ms`);
  
  next();
};
