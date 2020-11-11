class Check {
  public createCheckCamps = (
    title: string,
    description: string,
    imagePath: string
  ): boolean => {
    if (title == null || description == null || imagePath == null) {
      return true;
    }
    return false;
  };
  public IDCheck = (id: string): boolean => {
    if (id.length <= 20) {
      return true;
    }
    return false;
  };
  public bodyCheck = (title: string, description: string): boolean => {
    if (title == null || description == null) {
      return true;
    }
    return false;
  };

  public registerCheck = (
    name: string,
    username: string,
    email: string,
    password: string,
    age: number,
    from: string
  ): boolean => {
    if (
      name == null ||
      username == null ||
      email == null ||
      password == null ||
      age == null ||
      from == null
    ) {
      return true;
    }
    return false;
  };
}

export default Check;
