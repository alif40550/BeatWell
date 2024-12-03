# Auth Endpoint

## Login

- Method: **POST**
- Endpoint: **/login**

### Request Body

```json
{
  "email": "balya@gmail.com",
  "password": "balya"
}
```

### Response (Success)

```json
{
  "status": 200,
  "body": {
    "message": "Login success",
    "error": false,
    "data": {
      "id": 1,
      "name": "balya",
      "email": "balya@gmail.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImJhbHlhIiwiZW1haWwiOiJiYWx5YUBnbWFpbC5jb20iLCJpYXQiOjE3MzE4MjA3ODgsImV4cCI6MTczMTgyNDM4OH0.2QGiAC-Z-NnD3VFlSDdWdVmSm5bWn-8rqHv8ovQcLW0"
    }
  }
}
```

### Response (Failed)

```json
{
  "status": 400,
  "body": {
    "message": "Email or password is invalid",
    "error": true
  }
}
```

## Register

- Method: **POST**
- Endpoint: **/register**

### Request Body
```json
{
  "name": "balya",
  "email": "balya@gmail.com",
  "password": "balya"
}
```

### Response (Success)

```json
{
  "status": 200,
  "body": {
    "message": "Sign Up success",
    "error": false
  }
}
```

### Response (Failed)

```json
{
  "status": 400,
  "body": {
    "message": "Your credential is not valid",
    "error": true
  }
}
```
