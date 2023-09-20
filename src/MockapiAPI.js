const URL = 'https://6443d159466f7c2b4b5aeb2d.mockapi.io/adverts';

export const recordsPerPage = 8;

export const getArray = () => {
  return fetch(`${URL}`);
};

export const getUsers = (page) => {
  return fetch(`${URL}?&page=${page}&limit=${recordsPerPage}`);
};