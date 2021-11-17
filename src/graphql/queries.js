/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRepostV3 = /* GraphQL */ `
  query GetRepostV3($id: ID!) {
    getRepostV3(id: $id) {
      id
      profileID
      postID
      repostDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RepostToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      RepostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listRepostV3s = /* GraphQL */ `
  query ListRepostV3s(
    $filter: ModelRepostV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepostV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        postID
        repostDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRepostV3s = /* GraphQL */ `
  query SyncRepostV3s(
    $filter: ModelRepostV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRepostV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        profileID
        postID
        repostDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCommentV3 = /* GraphQL */ `
  query GetCommentV3($id: ID!) {
    getCommentV3(id: $id) {
      id
      profileID
      postID
      comment
      commentDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CommentToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      CommentToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listCommentV3s = /* GraphQL */ `
  query ListCommentV3s(
    $filter: ModelCommentV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        postID
        comment
        commentDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentV3s = /* GraphQL */ `
  query SyncCommentV3s(
    $filter: ModelCommentV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        profileID
        postID
        comment
        commentDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLikesV3 = /* GraphQL */ `
  query GetLikesV3($id: ID!) {
    getLikesV3(id: $id) {
      id
      profileID
      postID
      likeDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LikeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LikeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listLikesV3s = /* GraphQL */ `
  query ListLikesV3s(
    $filter: ModelLikesV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        postID
        likeDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
