export interface User {
  user_id: number;
  username: string;
  email: string;
  role_id: number;
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
  serviceCustonmerName: string;
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
  CreatedAt: string;
  Status: {
    StatusID: number;
    StatusName: string;
    StatusDescription: string;
  };
  Service: {
    ServiceComplaint: string;
    ServiceCustonmerName: string;
    ServiceDate: string;
  };
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
  MessageISRead: boolean;
  MessageService: number;
  User: {
    username: string;
    email: string;
    roleuser: number;
  };
  Service: {
    ServiceComplaint: string;
    ServiceCustonmerName: string;
    ServiceDate: string;
  };
}

export interface MessageForm {
  MessageService: number;
  MessageContent: string;
  MessageUser: number;
}

export interface TrackStatus {
  StatusID: number;
  StatusName: string;
  StatusDescription: string;
}

export interface ChatCardProps{
  chatId: string;
  problem: string;
  username: string;
  lastChat: string;
}