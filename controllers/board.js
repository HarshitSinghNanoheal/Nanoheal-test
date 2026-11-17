
class Boards {
    constructor() {
        // In-memory storage for board items
        this.boards = [];

        // Keep track of the next unique ID
        this.nextId = 1;
    }

    // Create a new board item
    create(title) {
        // TODO: Create a new item with:
        // - A unique ID
        // - The provided title
        // - Default stage of 1

        const newBoard = {
            // Complete the properties
        };

        // TODO: Add the new item to the boards array


        return newBoard;
    }

    // Update the stage of an existing board item
    update(id, stage) {
        // TODO: Find the board item using its ID
        

        // TODO: Validate that the new stage is either 1, 2, or 3
        // Return null if the stage is invalid


        // TODO: Update the item's stage


        return stage;
    }

    // Get a board item by ID
    get(id) {
        // TODO: Find and return the board item with the given ID

    }
}

module.exports = Boards;
