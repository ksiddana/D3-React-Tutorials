export const ADD_CAR = 'ADD_CAR';

export function addCar(car, serviceType) {

  const request = { car:car, serviceType:serviceType };

  return {
    type: ADD_CAR,
    payload: request,
  };
}
