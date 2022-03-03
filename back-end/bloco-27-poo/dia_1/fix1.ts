class Tv {
  private _brand: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;
  
  constructor(brand: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn = () => {
    const { _brand, _resolution, _connections } = this;
    console.log(_brand);
    console.log(_resolution);
    console.log(_connections);
  };

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    const isConnectionIncluded = this._connections.includes(value);
    if (isConnectionIncluded) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavaliable!')
    }
  }


}

const tv = new Tv(15, '1280x720', ['HDMI', 'Wifi']);
tv.connectedTo = 'Wifi';
console.log('Connected to:', tv.connectedTo);
