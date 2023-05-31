```
Symmetric-key algorithm
https://en.wikipedia.org/wiki/Symmetric-key_algorithm

asymmetric cryptography
https://en.wikipedia.org/wiki/Public-key_cryptography

command : local: npm start or npm start:dev

GET http://localhost:5003/health 

{
    "status": "heathy"
}

POST http://localhost:5003/encrypt

{
    "plainText": "sample application"
}

{
    "encryptedData": "VQQN7S2f6auQKCQfNDfCCOlB/RprC4ImV5xF9bUNHa6qbJkZNh7/sqVoH1myRJ0FDS5DpavdVpxHod5m7xBfyAhoy2/k+6EVhlrtz/b2kUcqMLvp2VSpyV364fSpK6+WtB4uIoRvoAGgauaiG+TIMppvinz11bDLYVM6VGHz9eA="
}


POST http://localhost:5003/decrypt

{
    "encryptedData": "udwnTqa0hXrAPuBmkzn/eT1ouMQBL5ulk41qiLBfTGNCtNOm5B+YqFIp7QbR0ST8fOrm8qBgoow1bDilavuEY1onHuzoV5s/lc7OJfJdzwMOQmlU+zYgUAnCXqHVvFYoJVQWXFHlXz1gsi99wc5sz28d0U04dt1w+SigDHq/qsc="
}

{
    "decryptedData": "sample application"
}

```