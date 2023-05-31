import { axiosInstance } from '../api/axiosInstance';

export const getAllPokemons = async () => {
  try {
    const res = await axiosInstance.get('pokemon', {
      params: { limit: 1400 },
    });
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
