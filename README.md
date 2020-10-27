# azure-functions-express-openapi

`POST http://localhost:7071/v1/tenants/users`

### Valid request

```
{
    "limit": 10,
    "searchText": "test"
}
```

### Invalid request

```
{
    "limit": "10",
    "searchText": "test"
}
```

### Invalid request

```
{
    "searchText": "test"
}
```
