# Nextflow Calculator Web API

## Test Application 

- [Postman](https://www.getpostman.com/)

## Public endpoint

```
https://nextflow-node-calculator-api.azurewebsites.net/
```

### Example

plus request

```
https://nextflow-node-calculator-api.azurewebsites.net/calculator/plus
```

## Testing service

```
GET /calculator
```

### Result

```json
{ "service" : "Calculator" }
```

## 1. Plus 

```
POST /calculator/plus
{ "first" : 10, "second": 1 }
```

### Results

```json
{ "result": 11 }
```

## 2. Subtract 

```json
POST /calculator/subtract
{ "first": 10, "second": 1 }
```

### Results

```json
{ "result" : 9 }
```

## 3. Multiply 

```
POST /calculator/multiply
{ "first" : 10, "second": 2 }
```

### Results

```json
{ "result": 20 }
```

