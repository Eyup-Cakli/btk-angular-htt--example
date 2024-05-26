export interface UserModel {
  address: AddressModel;
  age: Number;
  birthDate: string;
  bloodGroup: string;
  company: CompanyModel;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  height: string;
}

export interface AddressModel {
  address: string;
  city: string;
  coordinates: CoordinatesModel;
  country: string;
}

export interface CoordinatesModel {
  lat: number;
  lng: number;
}

export interface CompanyModel {
  address: AddressModel;
  department: string;
  name: string;
  title: string;
}
