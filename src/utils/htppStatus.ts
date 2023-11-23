const httpStatus = {
  OK: 200,
  CREATED: 201,
  SERVER_ERROR: 500,
};

const htppMapStatus = (payload: keyof typeof httpStatus): number => httpStatus[payload];

export default {
  htppMapStatus,
};