FROM postgres:13.11

EXPOSE 5432:5432
ENV POSTGRES_USER dbuser
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB appdb

COPY sql /docker-entrypoint-initdb.d