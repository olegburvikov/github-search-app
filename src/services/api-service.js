export default class GithubApiService {

    _apiBase = 'https://api.github.com/search/repositories?q='

    async getResource(name) {
      const res = await fetch(`${this._apiBase}${name}&sort=stars&order=desc`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${name}` +
          `, received ${res.status}`)
      }

      const data = await res.json();
      return data;
    }

    async getReposInfo(user) {
      const data = await this.getResource(user).then(data => data);
      return data.items.map(this._transformDate);
    }

  
    
    _transformDate(repos) {        
      return {
        id: repos.id,
        name : repos.full_name,
        url : repos.html_url,
        description: repos.description,
        stars: repos.stargazers_count,
        date: repos.updated_at 
      }
    }
    
  }





