class God {
  public static Human[] create() {
    Human[] humansArray = new Human[2];
    
    humansArray[0] = new Man("Adam", "male");
    humansArray[1] = new Woman("Eve", "woman");
    
    return humansArray;
  }
}

class Human {
  String name;
  String gender;
  
  public Human(String name, String gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Man extends Human {
  public Man(String name, String gender) {
    super(name, gender);
  }
}

class Woman extends Human {
  public Woman(String name, String gender) {
    super(name, gender);
  }
}
