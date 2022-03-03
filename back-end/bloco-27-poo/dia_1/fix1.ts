class Tv {
  brand: number;
  resolution: string;
  connections: string[];
  connectedTo: string;
  
  constructor(brand: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn = () => {
    const { brand, resolution, connections } = this;
    console.log(brand);
    console.log(resolution);
    console.log(connections);
  };
}

const tv = new Tv(15, '1280x720', ['HDMI', 'Wifi']);
console.log(tv.turnOn());