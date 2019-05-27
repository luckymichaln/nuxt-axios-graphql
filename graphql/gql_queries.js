export const POPULAR_ARTISTS_QUERY = `
{
  popular_artists {
    artists {
      name
      bio
      imageUrl
      id
    }
  }
}
`