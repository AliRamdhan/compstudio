export interface User {
  username: string;
  email: string;
  role: number;
}

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

// export interface ServiceForm {
//   ServiceLaptopName: string;
//   ServiceLaptopVersion: string;
//   ServiceComplaint: string;
//   ServiceDate: string;
//   ServiceCategory: number;
//   CustomerUser: number;
// }
// interfaces.ts

export interface ServiceForm {
  serviceID: number;
  serviceLaptopName: string;
  serviceLaptopVersion: string;
  serviceCustonmerName: string;
  serviceDate: string;
  serviceEstTime: string;
  serviceComplaint: string;
  isCompleteService: string;
  customerUser: number;
  serviceCategory: number;
}

export interface Service {
  ServiceID: number;
  ServiceLaptopName: string;
  ServiceLaptopVersion: string;
  ServiceCustonmerName: string;
  ServiceDate: string;
  ServiceEstTime: string;
  ServiceComplaint: string;
  IsCompleteService: string;
  CustomerUser: number;
  ServiceCategory: number;
}

export interface CreateServiceRequest {
  serviceLaptopName: string;
  serviceLaptopVersion: string;
  serviceComplaint: string;
  customerUser: number;
  serviceCategory: number;
}

export interface ErrorResponse {
  error: string;
}

export interface CreateServiceResponse {
  message: string;
  service: Service;
}

export interface TrackProgress {
  TrackID: number;
  TrackNumber: string;
  TrackStaff: string;
  TrackDescription: string;
  TrackStatusRefer: number;
  ServiceId: number;
}
export interface TrackProgressForm {
  TrackStatusRefer: number;
  ServiceId: number;
  TrackDescription: string;
  TrackStaff: string;
}

export interface ServiceForm {
  ServiceLaptopName: string;
  ServiceLaptopVersion: string;
  ServiceComplaint: string;
  ServiceDate: string;
  ServiceCategory: number;
  CustomerUser: number;
}

export interface Message {
  MessageId: number;
  MessageContent: string;
  MessageISRead:  boolean;
  MessageService: number;
}

export interface MessageForm {
  MessageService: number;
  MessageContent: string;
}
