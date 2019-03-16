# Mprove

[Demo](https://mprove.io/login) |
[Docs](https://mprove.io/docs) |
[Website](https://mprove.io)

Mprove - SQL analytics and dashboards for BigQuery. Inspired by [Looker](https://looker.com/).

## Deploy on server with https

Docker and Docker compose must be installed. DigitalOcean docker droplet fits well.

Open server ports 80, 443.

Create folders on server:
```
mkdir -p /mprove_data/db/mysql
mkdir -p /mprove_data/backend
mkdir -p /mprove_certs
mkdir -p /mprove-docker-deploy
```

Put your SSL certificate `cert.pem` and `key.pem` files to `mprove_certs` folder.

Copy `mprove/deploy/docker/ce-prod/docker-compose.yml` to `/mprove-docker-deploy/` folder.

Create `.env` file in `/mprove-docker-deploy/` folder:

```
MPROVE_CE_RELEASE_TAG=

MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=

BACKEND_DROP_DATABASE_ON_START=FALSE
BACKEND_JWT_SECRET=
BACKEND_SEND_EMAIL_FROM='"Name" <name@example.com>'
BACKEND_MAILGUN_ACTIVE_API_KEY=
BACKEND_MAILGUN_DOMAIN=
```

Run:
```
docker-compose up -d
```
MPROVE_CE_RELEASE_TAG - see [Mprove releases](https://github.com/mprove-io/mprove/releases)  
MYSQL_DATABASE - for example 'my_db'  
BACKEND_JWT_SECRET - random string (recommended min length - 32 characters)  
BACKEND_SEND_EMAIL_FROM - replace with your data  

MailGun account is required for now. Mailgun is email delivery service with free tier.


## License

Mprove is distributed under [Apache 2.0 License](https://github.com/mprove-io/mprove/blob/master/LICENSE).