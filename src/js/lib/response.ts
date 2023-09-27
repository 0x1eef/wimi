export type TResponse = {
  IPAddress: string;
  Location: string;
  ISP: string;
  City: string;
  Country: string;
  isTorExitNode: boolean;
};

export type TServerResponse = {
  YourFuckingIPAddress: string;
  YourFuckingLocation: string;
  YourFuckingISP: string;
  YourFuckingCity: string;
  YourFuckingCountry: string;
  YourFuckingTorExit: boolean;
};

export function Response(res: TServerResponse): TResponse {
  const self = Object.create(null);

  self.IPAddress = res.YourFuckingIPAddress;
  self.Location = res.YourFuckingLocation;
  self.ISP = res.YourFuckingISP;
  self.City = res.YourFuckingCity;
  self.Country =  res.YourFuckingCountry;
  self.isTorExitNode = res.YourFuckingTorExit;

  return self;
}
