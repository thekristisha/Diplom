export class NewsApi {
    constructor(req, toDate, fromDate, apiKey) {
      this.req = req;
      this.toDate = toDate;
      this.fromDate = fromDate;
      this.apiKey = apiKey;
      }
      getNewsCards = () => {
        var url = 'http://newsapi.org/v2/everything?' +
          `q=${this.req.value}&` +
          `from=${this.fromDate}&`+
          `to=${this.toDate}&` +
          `pageSize=100&` +
          `language=ru&` +
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