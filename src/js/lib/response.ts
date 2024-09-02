export type TResponse = {
  IPAddress: string;
  ISP: string;
  City: string;
  Country: string;
  CountryCode: string;
  Location: string;
  IsTorExitNode: boolean;
};

export type TServerResponse = {
  YourIPAddress: string;
  YourISP: string;
  YourCity: string;
  YourCountry: string;
  YourCountryCode: string;
  YourLocation: string;
  YourTorExit: boolean;
};

export function Response(res: TServerResponse): TResponse {
  const self = Object.create(null);

  self.IPAddress = res.YourIPAddress;
  self.ISP = res.YourISP;
  self.City = res.YourCity;
  self.Country = res.YourCountry;
  self.CountryCode = res.YourCountryCode;
  self.Location = res.YourLocation;
  self.IsTorExitNode = res.YourTorExit;

  return self;
}
