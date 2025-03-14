# Démonstration de déploiement d'une application conteneurisée sur Azure


## Azure CLI
<p>Il faut l'installer</p>

```shell
winget install --exact --id Microsoft.AzureCLI
az login
az account show
# Activons le Container Apps service :
az provider register --namespace Microsoft.App

# Azure Container Registry 


az acr create --resource-group DevResourceGroup --name tearoom --sku Basic
az acr login --name tearoom

docker tag tearoom-client tearoom.azurecr.io/tearoom-client:v1

#Supprimer une application conteneurisée dans containerapp
az containerapp delete --name tearoom-frontend --resource-group DevResourceGroup --yes

az containerapp env create --name tearoom-env --resource-group DevResourceGroup --location francecentral
```


### Créer l'application Front-End
```bash
az containerapp create \
    --name tearoom-client \
    --resource-group DevResourceGroup \
    --environment tearoom-env \
    --image tearoom.azurecr.io/tearoom-client:v3 \
    --target-port 80 \
    --ingress external \
    --registry-server tearoom.azurecr.io
```


## Docker 

Forcer le nettoyage du cache
```bash
docker compose build --no-cache
#Alternative au docker compose down
docker compose up --force-recreate
``