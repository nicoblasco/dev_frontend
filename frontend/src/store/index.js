import { createStore } from 'vuex'
import issue from "../modules/lobby/store/issue";

const store = createStore({
    modules: {
      issue
    }
  })

export default store