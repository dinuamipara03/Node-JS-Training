mutation {
  createUser(createUserInput: { name: "John Doe", email: "john.doe@example.com" }) {
    id
    name
    email
  }
}



{
  "data": {
    "createUser": {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}