export const BluetoothService: iBluetoothService;
export const BluetoothManager: iBluetoothManager;
export const BluetoothEscposPrinter: iBluetoothEscposPrinter;

type TAG = "BluetoothService";
type DEBUG = true;
type STATE_NONE = 0;
type STATE_CONNECTING = 2;
type STATE_CONNECTED = 3;
type NAME = "BTPrinter";
type MESSAGE_STATE_CHANGE = 4;
type MESSAGE_READ = 5;
type MESSAGE_WRITE = 6;
type MESSAGE_DEVICE_NAME = 7;
type MESSAGE_CONNECTION_LOST = 8;
type MESSAGE_UNABLE_CONNECT = 9;
type DEVICE_NAME = "device_name";
type DEVICE_ADDRESS = "device_address";
type TOAST = "toast";
type ErrorMessage = "No_Error_Message";

export interface iscanDevices {
  paired: BluetoothDevice[];
  found: BluetoothDevice[];
}

export interface BluetoothDevice {
  name: string;
  address: string;
}

export interface iBluetoothManager {
  EVENT_DEVICE_ALREADY_PAIRED: "EVENT_DEVICE_ALREADY_PAIRED";
  EVENT_DEVICE_FOUND: "EVENT_DEVICE_FOUND";
  EVENT_DEVICE_DISCOVER_DONE: "EVENT_DEVICE_DISCOVER_DONE";
  EVENT_CONNECTION_LOST: "EVENT_CONNECTION_LOST";
  EVENT_UNABLE_CONNECT: "EVENT_UNABLE_CONNECT";
  EVENT_CONNECTED: "EVENT_CONNECTED";
  EVENT_BLUETOOTH_NOT_SUPPORT: "EVENT_BLUETOOTH_NOT_SUPPORT";
  enableBluetooth: () => Promise<string[]>;
  disableBluetooth: () => Promise<void>;
  isBluetoothEnabled: () => Promise<boolean>;
  scanDevices: () => Promise<string>;
  connect: (address: string) => Promise<string>;
  unpaire: (address: string) => Promise<string>;
}

export interface iBluetoothService {
  TAG: TAG;
  DEBUG: DEBUG;
  STATE_NONE: STATE_NONE;
  STATE_CONNECTING: STATE_CONNECTING;
  STATE_CONNECTED: STATE_CONNECTED;
  NAME: NAME;
  MESSAGE_STATE_CHANGE: MESSAGE_STATE_CHANGE;
  MESSAGE_READ: MESSAGE_READ;
  MESSAGE_WRITE: MESSAGE_WRITE;
  MESSAGE_DEVICE_NAME: MESSAGE_DEVICE_NAME;
  MESSAGE_CONNECTION_LOST: MESSAGE_CONNECTION_LOST;
  MESSAGE_UNABLE_CONNECT: MESSAGE_UNABLE_CONNECT;
  DEVICE_NAME: DEVICE_NAME;
  DEVICE_ADDRESS: DEVICE_ADDRESS;
  TOAST: TOAST;
}

export enum iBluetoothEscposPrinterALIGN {
  LEFT = 0,
  RIGHT = 1,
  CENTER = 2,
}

export interface iBluetoothEscposPrinter {
  printerInit: () => Promise<void>;
  printAndFeed: (feed: number) => Promise<void>;
  printerLeftSpace: (sp: number) => Promise<void>;
  printerLineSpace: (sp: number) => Promise<void>;
  printerUnderLine: (line: number) => Promise<void>;
  printerAlign: (align: number) => Promise<void>;
  printText: (text: string, options?: Object) => Promise<void>;
  printColumn: (
    columnWidths: number[],
    columnAligns: iBluetoothEscposPrinterALIGN[],
    columnTexts: string[],
    options: Object
  ) => Promise<void>;
  setWidth: (width: number) => Promise<void>;
  printPic: (base64encodeStr: String, options: Object) => Promise<void>;
  setBlob: (weight: number) => Promise<void>;
  ALIGN: {
    LEFT: iBluetoothEscposPrinterALIGN.LEFT;
    RIGHT: iBluetoothEscposPrinterALIGN.RIGHT;
    CENTER: iBluetoothEscposPrinterALIGN.CENTER;
  };
}