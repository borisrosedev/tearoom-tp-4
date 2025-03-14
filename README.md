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

az containerapp env create --name tearoom-env --resource-group DevResourceGroup --location francecentral
```