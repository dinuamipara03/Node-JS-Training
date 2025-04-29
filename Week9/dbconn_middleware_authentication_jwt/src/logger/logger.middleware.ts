import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const secret = 'your-secret-key'; // Replace with a secure key in production
const userInfo = { firstName: 'defaultuser' }; // Example user info
const payload = {
  user: userInfo.firstName,
};

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private token: string; // Store the token for reuse

  constructor() {
    // Generate the token once when the middleware is initialized
    this.token = jwt.sign(payload, secret, { expiresIn: '5m' });
    console.log('Generated Token (once):', this.token);
  }

  use(req: any, res: any, next: () => void) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log('Token verification failed:', err);
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }

      // Attach the decoded user information to the request object
      req.user = decoded;
      console.log('Token verified:', decoded);
      next();
    });
  }
}