
<h1 align="center"><img src="./img/express.png" title="Authenticator" alt="authenticator" width="128px">

<img src="./img/passport.png" title="Authenticator" alt="authenticator" width="128px"></h1>

# Authenticator-expressJS

> Secure backend authentication system for api and frontend frameworks.

---

## Usage

With axios:

```javascript
// Login request

axios.post('/login', {
    username: 'Fred',
    password: 'abc123#21'
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
});
```

```javascript
// Signup request

axios.post('/signup', {
    username: 'Fred',
    password: 'abc123#21',
    email: 'abc@gmail.com'
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
});
```
---

## Installation

- Clone the repo
- Add it to your project
- Use `concurrently` package to start this backend and your front end project
- Lastly, use axios to send requests to the backend api

---

## FAQ

- **Having problem setting up?**
    - No problem! contact me on `amjedcha@gmail.com` or open an issue.

---


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
