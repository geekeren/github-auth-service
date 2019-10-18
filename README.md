## Github Auth Service

This project aims to generate `access_token` for github oAuth APIs. The `access_token` is created from `code` which created by github after you logging with github in your website, according to [oAuth2.0 Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code)

## Why need me?

Github authentication API doesn't support [oAuth2.0 Implicit Flow](https://auth0.com/docs/flows/concepts/implicit). Given you have a Single page Application, you want to call Github API in browser-side, you need a backedend service to protect the `client_secret` and then generate access_token.


## Workflow

```
oAuth code -> github-auth-service -> access_token
```

`access_token` can be saved in your frontend and call Github API directly in browser side.

## Set up in local
```
export GITHUB_CLIENT_ID=xxxxxxxxxxx 
export GITHUB_CLIENT_SECRET=xxxxxxxxxxx
yarn install
yarn start
```

## Deploy using docker

```
export GITHUB_CLIENT_ID=xxxxxxxxxxx 
export GITHUB_CLIENT_SECRET=xxxxxxxxxxx
docker run -it bywang/github-auth-service \ 
-e GITHUB_CLIENT_ID=$GITHUB_CLIENT_ID \
-e GITHUB_CLIENT_SECRET=$GITHUB_CLIENT_SECRET
```

## How to call this service?

```
POST /auth
{"code": "your_code_here"} //with data in Json format:
```
