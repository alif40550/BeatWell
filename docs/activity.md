# Activity Endpoint

- Method: **GET**
- Endpoint: **/activity**
- Headers:

```json
{
  "Authorizaton": "access_token"
}
```

## Responses (Success)

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan  activity',
        "error":false,
        "data":{
                "id":string,
                "name":string,
                "detail":string
            },
            ...
    },
    ...
}
```

## Responses (Failed)

```json
{
    "status":400,
    "body":{
        "message":'gagal mendapatkan data activity',
        "error":true,
    },
    ...
}
```
