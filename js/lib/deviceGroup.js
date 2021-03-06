"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events = require("events");
class DeviceGroup extends events.EventEmitter {
    constructor(...devices) {
        super();
        this._devices = new Array();
        this._devices = devices;
    }
    getDevices() {
        return this._devices;
    }
    addDevice(device) {
        this._devices.push(device);
    }
    addDevices(array) {
        this._devices.concat(array);
    }
    setDevices(array) {
        this._devices = array;
    }
    removeDevice(device) {
        if (!device) {
            return;
        }
        let index = this._getDeviceIndex(device);
        this._devices.splice(index, 1);
    }
    removeDevices(array) {
        for (let dev of array) {
            this.removeDevice(dev);
        }
    }
    getDevice(index) {
        if (index < 0 || index > this._devices.length) {
            return null;
        }
        return this._devices[index];
    }
    setState(state, index) {
        let device = this._getDeviceForIndex(index);
        if (!device) {
            return;
        }
        device.state = state;
    }
    getState(index) {
        let device = this._getDeviceForIndex(index);
        if (!device) {
            return null;
        }
        return device.state;
    }
    _getDeviceIndex(device) {
        for (let i = 0; i < this._devices.length; i++) {
            if (this._devices[i] == device) {
                return i;
            }
        }
        return -1;
    }
    _getDeviceForIndex(index) {
        if (index < 0 || index > this._devices.length) {
            return null;
        }
        return this._devices[index];
    }
}
exports.DeviceGroup = DeviceGroup;
//# sourceMappingURL=deviceGroup.js.map