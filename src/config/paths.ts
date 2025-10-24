export const paths = {
  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
  },
  home: {
    getHref: () => "/",
  },
  news: {
    getHref: () => "/news",
  },
  newsDetails: {
    getHref: (slug: string) => `/news/${slug}`,
  },
  users: {
    getHref: () => "/users",
  },
  usersDetails: {
    getHref: (id: string) => `/users/${id}`,
  },
  posts: {
    getHref: () => "/posts",
  },
  postsDetails: {
    getHref: (slug: string) => `/posts/${slug}`,
  },
  about: {
    getHref: () => "/about",
  },
  contacts: {
    getHref: () => "/contacts",
  },
} as const;
