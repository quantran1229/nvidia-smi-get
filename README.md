# nvidia-smi-get
Simple wrapper around [nvidia-smi](https://developer.nvidia.com/nvidia-system-management-interface) interface for Node.js to retrieve infomation about NVIDIA GPU.

Read more here https://developer.download.nvidia.com/compute/DCGM/docs/nvidia-smi-367.38.pdf
## Installation
```npm
npm i nvidia-smi-get
```

## Example
```js
import { get } from 'nvidia-smi-get';

// equivalent to 'nvidia-smi -q'
const gpuValue = get();
console.log(gpuValue)
```

Sample object return
```
{
  Timestamp: 'Mon Dec 19 12:46:21 2022',
  'Driver Version': '527.37',
  'CUDA Version': '12.0',
  'Attached GPUs': '1',
  'GPU 00000000:01:00.0': {
    'Product Name': 'NVIDIA GeForce RTX 3060',
    'Product Brand': 'GeForce',
    'Product Architecture': 'Ampere',
    'Display Mode': 'Enabled',
    'Display Active': 'Enabled',
    'Persistence Mode': null,
    'MIG Mode': { Current: null, Pending: null },
    'Accounting Mode': 'Disabled',
    'Accounting Mode Buffer Size': '4000',
    'Driver Model': { Current: 'WDDM', Pending: 'WDDM' },
    'Serial Number': null,
    'GPU UUID': 'GPU-7a5de869-f88d-c8f5-660b-5d6e9cae21cc',
    'Minor Number': null,
    'VBIOS Version': '94.06.25.00.82',
    'MultiGPU Board': 'No',
    'Board ID': '0x100',
    'Board Part Number': null,
    'GPU Part Number': '2504-302-A1',
    'Module ID': '1',
    'Inforom Version': {
      'Image Version': 'G001.0000.03.03',
      'OEM Object': '2.0',
      'ECC Object': null,
      'Power Management Object': null
    },
    'GPU Operation Mode': { Current: null, Pending: null },
    'GSP Firmware Version': null,
    'GPU Virtualization Mode': { 'Virtualization Mode': 'None', 'Host VGPU Mode': null },
    IBMNPU: { 'Relaxed Ordering Mode': null },
    PCI: {
      Bus: '0x01',
      Device: '0x00',
      Domain: '0x0000',
      'Device Id': '0x250410DE',
      'Bus Id': '00000000:01:00.0',
      'Sub System Id': '0x40711458',
      'GPU Link Info': [Object],
      'Bridge Chip': [Object],
      'Replays Since Reset': '0',
      'Replay Number Rollovers': '0',
      'Tx Throughput': '895000 KB/s',
      'Rx Throughput': '191000 KB/s',
      'Atomic Caps Inbound': null,
      'Atomic Caps Outbound': null
    },
    'Fan Speed': '0 %',
    'Performance State': 'P5',
    'Clocks Throttle Reasons': {
      Idle: 'Active',
      'Applications Clocks Setting': 'Not Active',
      'SW Power Cap': 'Not Active',
      'HW Slowdown': 'Not Active',
      'HW Thermal Slowdown': 'Not Active',
      'HW Power Brake Slowdown': 'Not Active',
      'Sync Boost': 'Not Active',
      'SW Thermal Slowdown': 'Not Active',
      'Display Clock Setting': 'Not Active'
    },
    'FB Memory Usage': {
      Total: '12288 MiB',
      Reserved: '159 MiB',
      Used: '1142 MiB',
      Free: '10986 MiB'
    },
    'BAR1 Memory Usage': { Total: '256 MiB', Used: '1 MiB', Free: '255 MiB' },
    'Compute Mode': 'Default',
    Utilization: { Gpu: '36 %', Memory: '18 %', Encoder: '0 %', Decoder: '0 %' },
    'Encoder Stats': {
      'Active Sessions': '0',
      'Average FPS': '0',
      'Average Latency': '0'
    },
    'FBC Stats': {
      'Active Sessions': '0',
      'Average FPS': '0',
      'Average Latency': '0'
    },
    'Ecc Mode': { Current: null, Pending: null },
    'ECC Errors': { Volatile: [Object], Aggregate: [Object] },
    'Retired Pages': {
      'Single Bit ECC': null,
      'Double Bit ECC': null,
      'Pending Page Blacklist': null
    },
    'Remapped Rows': null,
    Temperature: {
      'GPU Current Temp': '44 C',
      'GPU Shutdown Temp': '98 C',
      'GPU Slowdown Temp': '95 C',
      'GPU Max Operating Temp': '93 C',
      'GPU Target Temperature': '83 C',
      'Memory Current Temp': null,
      'Memory Max Operating Temp': null
    },
    'Power Readings': {
      'Power Management': 'Supported',
      'Power Draw': '21.99 W',
      'Power Limit': '170.00 W',
      'Default Power Limit': '170.00 W',
      'Enforced Power Limit': '170.00 W',
      'Min Power Limit': '100.00 W',
      'Max Power Limit': '212.00 W'
    },
    Clocks: {
      Graphics: '457 MHz',
      SM: '457 MHz',
      Memory: '810 MHz',
      Video: '555 MHz'
    },
    'Applications Clocks': { Graphics: null, Memory: null },
    'Default Applications Clocks': { Graphics: null, Memory: null },
    'Deferred Clocks': { Memory: null },
    'Max Clocks': {
      Graphics: '2100 MHz',
      SM: '2100 MHz',
      Memory: '7501 MHz',
      Video: '1950 MHz'
    },
    'Max Customer Boost Clocks': { Graphics: null },
    'Clock Policy': { 'Auto Boost': null, 'Auto Boost Default': null },
    Voltage: { Graphics: '662.500 mV' },
    Fabric: { State: null, Status: null },
    Processes: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
```
## Contributing

All contributions are accepted as a PR.

* You can file issues by submitting a PR.
* Implement new feature by submitting a PR.
* Improve documentation by submitting PR.
You are welcome to improve this project! It would help me so much!
## Support

For support, email downy1229@gmail.com!