# Temporizador-Monitora

Esse projeto tem como objetivo obter o peso registrado em uma balança conectada via bluetooth..

As medições de peso são registradas em um SGBD Mongo.

Para a conexão com a balança usa-se a api [Web BLE](https://developer.chrome.com/articles/bluetooth/). O projeto é compatível com as balanças Xiaomi (MI SCALE2), conforme documentado [em](https://github.com/wiecosystem/Bluetooth/blob/master/doc/devices/huami.health.scale2.md) por [wiecosystem](https://github.com/wiecosystem).

Esse projeto baseou-se em [limhenry](https://github.com/limhenry/) depois da leitura desse artigo

![demo](demo-image/demo.png?raw=true)

## Projeto setup

```
npm install
```

### Compila e executa para desenvolvimento

```
npm run serve
```

### Inicia o json-server

```
npm run json-server
```

### Compila and minifica para produção

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Configuração para customização

Ver [Configuration Reference](https://cli.vuejs.org/config/).
