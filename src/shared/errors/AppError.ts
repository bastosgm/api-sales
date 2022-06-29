class AppError {
  // public readonly message: string;
  // public readonly statusCode: number;

  //padronizando status 400
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400,
  ) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
