export interface Product {
  ProductID: number;
  ProductName: string;
  ProductPrice: number;
  ProductLink: string;
  ProductImage: string;
}

export interface CategoryService {
  CatID: number;
  CatName: string;
  CatEstTime: number;
  ProductLink: string;
  CatRangePrice: string;
}

export interface CategoryServiceSelection {
  value: string;
  label: string;
}

export interface ServiceForm {
  ServiceLaptopName: string;
  ServiceLaptopVersion: string;
  ServiceComplaint: string;
  ServiceDate: string;
  // ServiceCategory: number;
  // CustomerUser: number;
}

export interface TrackProgress {
  TrackID: number;
  TrackNumber: string;
  TrackStaff: string;
  TrackStatusRefer: number;
  ServiceId: number;
}
