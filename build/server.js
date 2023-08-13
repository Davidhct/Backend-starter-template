"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
console.log("here");
console.log(os_1.default.type());
console.log(os_1.default.version());
console.log(os_1.default.homedir());
