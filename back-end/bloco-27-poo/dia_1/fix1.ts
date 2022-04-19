class Tv {
  private _brand: number;
  private _resolution: string;
  private _size: number;
  private _connections: string[];
  private _connectedTo: string;
  
  constructor(brand: number, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn = () => {
    const { _brand, _resolution, _connections, _size } = this;
    console.log(_brand);
    console.log(_resolution);
    console.log(_connections);
    console.log(_size);
  };

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    const isConnectionIncluded = this._connections.some((connection) => connection === value);
    if (isConnectionIncluded) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavaliable!')
    }
  }

}

const tv = new Tv(15, 5, '1280x720', ['HDMI', 'Wifi']);
tv.connectedTo = 'Wifi';
console.log(tv.connectedTo);
