type Slices  = 4 | 6 | 8;

interface Pizza {
    flavor: string,
    slices: Slices
}

const pizza: Pizza = {
  flavor: 'Mussarela',
  slices: 8
}