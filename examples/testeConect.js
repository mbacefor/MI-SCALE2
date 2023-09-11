const Bluetooth = require("webbluetooth").Bluetooth;

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

const log = console.log;
const serviceUuid = '0000181d-0000-1000-8000-00805f9b34fb';
const characteristicUuid = null;
//00002a9e-0000-1000-8000-00805f9b34fb
const bluetooth = new Bluetooth();

log('Requesting Bluetooth Device...');
bluetooth.requestDevice({ filters: [{ services: [serviceUuid] }] })
  .then(device => {
    console.log('> Name:             ' + device.name);
    console.log('> Id:               ' + device.id);
    console.log('> Connected:        ' + device.gatt.connected);
    log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    log('Getting Service...');
    return server.getPrimaryService(serviceUuid);
  })
  .then(service => {
    log('Getting Characteristics...');
    if (characteristicUuid) {
      // Get all characteristics that match this UUID.
      return service.getCharacteristics(characteristicUuid);
    }
    // Get all characteristics.
    return service.getCharacteristics();
  })
  .then(characteristics => {
    log('> Characteristics: ' +
      characteristics.map(c => c.uuid).join('\n' + ' '.repeat(19)));
    return characteristics[0]
  }).then(characteristic => {
    log('Reading Battery Level...');
    return characteristic.readValue();
  })
  .then(value => {
    log('> Battery Level is:' + value);
    let buffer = new Uint16Array(value.buffer)
    let batteryLevel = value.getUint8(0);
    
    for (let index = 0; index < buffer.length; index++) {
      const element = buffer[index];
      log('['+index+']:'+element+':<'+ dec2bin(element)+'>');
      
    }
    
    let weight = (((buffer[2] & 0xFF) << 8) | (buffer[1] & 0xFF)) / 200.0;
    let weight2 = value.getUint16(1, true) / 200;
    log('> Weight Level is ' + weight + '%');
    log('> Weight2 Level is ' + weight2 + '%');

  })
  .catch(error => {
    log('Argh! ' + error);
  });