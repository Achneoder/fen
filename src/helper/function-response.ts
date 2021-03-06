export class FunctionResponse {
  statusCode = 200;
  body = undefined;
  headers: Record<string, string> = {};

  public status(statusCode: number): FunctionResponse {
    this.statusCode = statusCode;
    return this;
  }

  public send(data: Record<string, unknown>): void {
    this.body = data;
  }

  public set(header: string, value: string): void {
    this.headers[header] = value;
    this.headers[header.toLowerCase()] = value;
  }

  public get(header: string): string {
    return this.headers[header];
  }

  public json(data: Record<string, unknown>): void {
    this.body = JSON.parse(JSON.stringify(data));
  }
}
