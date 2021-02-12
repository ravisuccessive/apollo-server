export default {
  loginUser: async (parent, args, context) => {
    const { payLoad: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.loginUser({ email, password });
    console.log(response);
    return response.data;
  }
};