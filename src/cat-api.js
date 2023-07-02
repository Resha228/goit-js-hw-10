export function fetchBreeds (){
const BASE_URL = 'https://api.thecatapi.com/v1/breeds?api_key=live_dEpGlLjnps3q5Rcl90ho6s5QWnLyJO4QkMJPUMOPZE6njGrWrzLh86M0u6ABrO7x';

return fetch(BASE_URL)
    .then(resp => {
      if (!resp.ok) throw new Error(resp.status);
      return resp.json();
    })
    .then(resp => resp.map(item => ({ name: item.name, id: item.id })))
    .catch(error  => console.log(error))
};
export function fetchCatByBreed (breedId) {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_dEpGlLjnps3q5Rcl90ho6s5QWnLyJO4QkMJPUMOPZE6njGrWrzLh86M0u6ABrO7x`
  return fetch(BASE_URL)
    .then(resp => {
      if (!resp.ok) throw new Error(resp.status);
      return resp.json();
    })
    .catch(error  => console.log(error))
}