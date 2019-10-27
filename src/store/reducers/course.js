const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      leasons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" }
      ]
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      leasons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  const { type, module, lesson } = action;

  if (type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: lesson,
      activeModule: module
    };
  }

  return state;
}
