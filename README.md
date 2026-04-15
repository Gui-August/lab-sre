# 🚀 Lab SRE - Prometheus + Grafana + Alertas

## 📊 Visão geral
Este projeto simula um ambiente real de SRE com:

- Monitoramento com Prometheus
- Dashboards com Grafana
- Alertas automatizados
- Aplicação instrumentada

## 🧰 Tecnologias
- Docker
- Prometheus
- Grafana
- Node.js

## ▶️ Como rodar

```bash
docker-compose up --build

## 🌐 Acessos
App: http://localhost:3000
Prometheus: http://localhost:9090
Grafana: http://localhost:3001

## 🚨 Alertas

Alerta configurado:

App sem requisições
🧪 Testes
Gerar tráfego → atualizar app
Parar tráfego → alerta dispara

##🎯 Objetivo

Demonstrar conceitos de SRE:

Observabilidade
Monitoramento
Alerting
Simulação de falhas