docker-compose -f src/main/docker/keycloak.yml up
docker-compose -f src/main/docker/elasticsearch.yml up -d
docker-compose -f src/main/docker/kafka.yml up -d
