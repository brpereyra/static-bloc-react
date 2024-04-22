export default class Posts {
  static async getPostsLists(_limit = 5, _page = 1) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${_limit}&_page=${_page}`
      )
      const data = await response.json()
      return data
    } catch (error) {
      console.log('Err >> cannont get post list', error)
    }
  }

  static getPost(id) {
    return this.posts.find((post) => post.id === id)
  }
}
