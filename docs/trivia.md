# Food Endpoint

## Get All Foods

- Method: **GET**
- Endpoint: **/trivia**
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
        "message":'berhasil mendapatkan trivia',
        "error":false,
        "data":[
            {
                "trivia": string
            },
            ...
        ]
    },
    ...
}
```

## Responses (Failed)

```json
{
    "status":404,
    "body":{
        "message":'gagal mendapatkan trivia',
        "error":true,
    },
    ...
}
```
