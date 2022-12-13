var CryptoJS = require("crypto-js");
var key = "KFcOIj4Fr28W9YHUkZHEtGWYeDj2Tg9VhCPvbQSrykt23at1rWL87iWDkCnqCUdtfqM8wetGrQmLBqvkgHxr0uwwN5JghXMthT8wtcAZoBhDdrN0atgFV3H7EGhm6SJ6dTjdisSj8zCDJmTOzWi0pK9gYaJYQjtSlIxUZAZOFFCnsbj14LfRYuc54Ln3SU8qeZNb7R3UQE11zhxKUMMGa8WNcbrJQFpyJjhDxHSeawQ7A2qNvlUGPPFIIDiygFptbqyibwWDFDrB39taPEzfd0R7qA5OsogwSUMNOoqeXIENJwvnsAYWLtHh5hTk5bA9YEIy62l7M04HfwmEDxXR";
module.exports = (ctx) => {
  switch(ctx.encode) {
    case "xor":
      return xor()
      break;
    case "plain":
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
    case 'cc':
      return {
        encode(str) {
          return CryptoJS.AES.encrypt(str, key);
        },
        decode(str) {
         return CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);
        }
      }
      break;
    case "b64":
      return {
        encode(str) {
          return new Buffer.from(str, 'utf-8').toString('base64')
        },
        decode(str) {
          return new Buffer.from(str, 'base64').toString('utf-8')
        }
      }
      break;
    default:
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
  }
}

function xor() {
  return {
    encode(str) {
      if (str.startsWith('http')) return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    },
    decode(str) {
      if (!str.startsWith('http')) return decodeURIComponent(str).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    }
  }
}