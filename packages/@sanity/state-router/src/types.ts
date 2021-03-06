export type Segment = {
  name: string
  type: 'dir' | 'param'
}

export type Transform<T> = {
  toState: (value: string) => T
  toPath: (value: T) => string
}

export type Route = {
  raw: string
  segments: Segment[]
  transform?: {
    [key: string]: Transform<any>
  }
}

// eslint-disable-next-line no-use-before-define
export type RouteChildren = Node[] | ((state: Object) => Node[])

export type Node = {
  route: Route
  scope?: string
  transform?: {
    [key: string]: Transform<any>
  }
  children: RouteChildren
}

export type Router = Node & {
  _isRoute: boolean
  encode: (state: Object) => string
  decode: (path: string) => Object | null
  isNotFound: (path: string) => boolean
  getBasePath: () => string
  getRedirectBase: (pathname: string) => string | null
  isRoot: (path: string) => boolean
}
export type MatchResult = {
  nodes: Node[]
  missing: string[]
  remaining: string[]
}
