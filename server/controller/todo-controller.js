import Todo from "../model/Todo.js";

// posting the todo task
export const addTodo = async (request, response) => {
  try {
    const { name, description } = request.body;
    const newTodo = await Todo.create({
      name,
      description,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// getting all the listed todo task
export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// updating the status of the todo
export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// deleting the existing toto task
export const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
