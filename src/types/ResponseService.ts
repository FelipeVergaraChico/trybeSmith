type ServiceResponseErrorStatus = 'SERVER_ERROR';
type ServiceResponseSucessStatus = 'CREATED' | 'OK';

export type ServiceResponseError = {
  status: ServiceResponseErrorStatus,
  data: { message: string }
};

export type ServiceResponseSuces<T> = {
  status: ServiceResponseSucessStatus,
  data: T
};

export type ResponseServiceType<T> = ServiceResponseError | ServiceResponseSuces<T>;