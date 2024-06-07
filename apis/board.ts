import axios from './instance';

export async function getBoardById(id: number) {
  const res = await axios.get(`/articles/${id}`);
  return res.data;
}
