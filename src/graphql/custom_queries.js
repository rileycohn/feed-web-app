export const listPostWithProfileV3 = /* GraphQL */ `
query MyQuery {
    listPostV3s {
      items {
        post
        profileID
        PostToProfile {
          id
          name
          profilePic
        }
      }
    }
  }
`;
