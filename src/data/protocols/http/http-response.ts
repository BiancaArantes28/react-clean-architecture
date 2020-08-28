export enum HttpStatusCode {
  noContent = 204,
  badRequest = 400,
  unathorized = 401,
  ok = 200,
  notFound = 404,
  serveError = 500
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
