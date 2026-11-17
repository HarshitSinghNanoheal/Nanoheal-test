# Implement a REST API for a TODO Board

## Problem Description

Implement a REST service that exposes the `/boards` endpoint to manage TODO items.

Each item in the board is represented as a JSON object with the following properties:

- **id**: Unique identifier of the TODO item (Integer).
- **title**: Title of the TODO item (String).
- **stage**: Current stage of the TODO item (Integer).

Each TODO item can be in one of three stages:

- `1` – To Do
- – In Progress
- `3` – Completed

### Example Item

```
{
    "id": 1,
    "stage": 1,
    "title": "Create a new project"
}
```

## Requirements

Implement the following API endpoints:

### 1. POST `/boards`

Creates a new TODO item in the board.

**Request Body:**

The request body should contain the `title` property. The `id` and `stage` properties should not be provided by the client.

```
{
    "title": "Create a new project"
}
```

**Expected Behavior:**

- Create a new TODO item.
- Automatically assign a unique integer ID to the item, starting from `1`.
- Set the default stage to `1`.
- Store the newly created item in memory.
- Return the created item in the response.

**Expected Response:**

Status Code: `201 Created`

```
{
    "id": 1,
    "stage": 1,
    "title": "Create a new project"
}
```

### . PUT `/boards/:id`

Updates the stage of an existing TODO item.

**Request Body:**

The request body should contain the new `stage` value.

```
{
    "stage": 2
}
```

**Expected Behavior:**

- Identify the TODO item using the ID provided in the URL.
- Accept only the stage values `1`, , or `3`.
- Update the item's stage if the provided value is valid.
- Return the updated item in the response.
- If the provided stage is invalid, do not update the item.

**Expected Response (Valid Stage):**

Status Code: `200 OK`

```
{
    "id": 1,
    "stage": 2,
    "title": "Create a new project"
}
```

**Expected Response (Invalid Stage):**

For a request containing:

```
{
    "stage": 4
}
```

Return status code: `400 Bad Request`

There are no specific requirements for the response body in this case.

## Important Notes

1. Use an in-memory array to store TODO items. Do not use any database or ORM.
2. The ID of each newly created item must be unique and auto-incremented, starting from `1`.
3. The stage of every newly created item must default to `1`.
4. Valid stage values are strictly limited to `1`, , and `3`.
5. Assume that the ID provided in a PUT request always corresponds to an existing item.
6. The in-memory data should remain available throughout the lifetime of the application.
7. The provided project structure and boilerplate files should be maintained.

## Project Structure

The project contains the following important files:

- `/controller/boards.js` – Implement the `Boards` class and its methods (`create`, `pdate`, and `get`).
- `/routes/boards.js` – Implement the REST API route handlers.
- `/app.js` – Application entry point (provided).
- `/test/test.js` – Unit tests (provided).

Complete the implementation so that all unit tests pass.