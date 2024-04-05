export type TResponse = {
  IPAddress: string;
  ISP: string;
  City: string;
  Country: string;
  isTorExitNode: boolean;
};

export type TServerResponse = {
  YourIPAddress: string;
  YourISP: string;
  YourCity: string;
  YourCountry: string;
  YourTorExit: boolean;
};

export function Response(res: TServerResponse): TResponse {
  const self = Object.create(null);

  self.IPAddress = res.YourIPAddress;
  self.ISP = res.YourISP;
  self.City = res.YourCity;
  self.Country = res.YourCountry;
  self.isTorExitNode = res.YourTorExit;

  return self;
}
