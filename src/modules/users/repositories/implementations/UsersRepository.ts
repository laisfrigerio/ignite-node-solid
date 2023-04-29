import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const userAlreadyExists = this.users.some((user) => user.email === email);

    if (userAlreadyExists) {
      throw new Error("User is already registered");
    }

    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const { id } = receivedUser;

    const user = this.findById(id);

    user.admin = true;

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
