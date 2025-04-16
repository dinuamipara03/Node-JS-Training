"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const secret = 'your-secret-key';
const userInfo = { firstName: 'defaultuser' };
const payload = {
    user: userInfo.firstName,
};
let LoggerMiddleware = class LoggerMiddleware {
    token;
    constructor() {
        this.token = jwt.sign(payload, secret, { expiresIn: '1h' });
        console.log('Generated Token (once):', this.token);
    }
    use(req, res, next) {
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
            req.user = decoded;
            console.log('Token verified:', decoded);
            next();
        });
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerMiddleware);
//# sourceMappingURL=logger.middleware.js.map