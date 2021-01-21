import User from '../../service/user'

export default {

  getAllTrainees: () => User.getAllUsers(),
  getTrainee: (parent, args) => {
    const { id } = args;
    return User.getUser(id);
  }
};