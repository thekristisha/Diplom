export class NewsApi {
    constructor(toDate, apiKey) {
      this.toDate = toDate;
      this.apiKey = apiKey;
      }
      getNewsCards = () => {
        var url = 'https://newsapi.org/v2/everything?' +
          `q=cat&` +
          `from=2020-08-04&`+
          `to=${this.toDate}&` +
          `pageSize=100&` +
          `apiKey=${this.apiKey}`;
        return fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    
      }
}