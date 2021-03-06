"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const device_1 = require("./device");
var device_2 = require("./device");
exports.AccessLevel = device_2.AccessLevel;
exports.DeviceChannels = device_2.DeviceChannels;
class Switch extends device_1.Device {
    constructor(client, _ackSchema, _subSchema, _ack = [], // acknowledgements from device
        _sub = [], // subscribe to data from device
        _pub = [], // publish topic
        serial = '', name = '', description = '', location = 'unknown', _accessLevel = device_1.AccessLevel.READ_WRITE) {
        super(device_1.DeviceType.Switch, client, _ackSchema, _subSchema, _ack, _sub, _pub, serial, name, description, location, _accessLevel);
        this.client = client;
        this._ackSchema = _ackSchema;
        this._subSchema = _subSchema;
        this._ack = _ack;
        this._sub = _sub;
        this._pub = _pub;
        this.serial = serial;
        this.name = name;
        this.description = description;
        this.location = location;
        this._accessLevel = _accessLevel;
    }
    // manually assign the state variable
    // as it is a setter, doing so automagically would
    // be cyclical.
    _assignAckPropertyValue(key, value) {
        if (key === 'state') {
            this._state = value;
            return true;
        }
        return super._assignAckPropertyValue(key, value);
    }
}
exports.Switch = Switch;
//# sourceMappingURL=switch.js.map