export class GithubApi {
    constructor() {
      }
      getCommitCards = () => {
        var url = 'https://api.github.com/repos/thekristisha/Diplom/commits';
        return fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    
      }
}