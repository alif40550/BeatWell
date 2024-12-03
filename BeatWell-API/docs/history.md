# History

- Method: **GET**
- Endpoint: **/users/{id}/histories**

## Responses (Success)

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan list history',
        "error":false,
        "data":[
            {
                "id":string,
                "result":boolean,
                "last_checked":date
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
    "status":400,
    "body":{
        "message":'gagal mendapatkan list history',
        "error":true,
    },
    ...
}
```
```json
{
    "status":401,
    "body":{
        "message":'unauthorized',
        "error":true,
    },
    ...
}
```

## Responses (Empty)

```json
{
    "status":200,
    "body":{
        "message":'berhasil mendapatkan list history',
        "error":false,
        "data":[]
    },
    ...
}
```