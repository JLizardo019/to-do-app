import { sql } from "@vercel/postgres";
// to do list add validation/ error handling
// ui should show error messages

// All GET  DB Requests
export async function GetAllListsByUser({ params }) {
  const { rows } = await sql`SELECT * FROM lists WHERE user_id=${params.userId} ORDER BY created_at ASC`;

  for (const row of rows) {
    row.badge = await GetIncompItemsInList({ params: { listId: row.id } });
  }
    return rows;
}

export async function GetAllItemsInList({ params }) {
    const { rows } = await sql`SELECT * FROM items WHERE list_id=${params.listId}`;
    return rows;
}

export async function GetIncompItemsInList({ params }) {
    const { rows } = await sql`SELECT * FROM items WHERE list_id=${params.listId} AND is_completed=false`;
    return rows.length;
}

// All POST DB Requests
export async function CreateList({ params}) {
    const { rows } = await sql`INSERT INTO lists (user.id, name, description) VALUES (${user.id}, ${params.listName}, ${params.description}) RETURNING *`;
    return rows;
}

export async function CreateListItem({ params }) {
    const { rows } = await sql`INSERT INTO items (list_id, description) VALUES (${params.listId}, ${params.description}, ) RETURNING *`;
    return rows;
}

export async function CreateUser({ params }) {
    const { rows } = await sql`INSERT INTO users (name, email) VALUES (${params.name}, ${params.email}) RETURNING *`;
    const {rows2} = await sql`INSERT INTO usercredentials (user_id, password) VALUES (${rows[0].id}, ${params.password}) RETURNING *`;
    return {...rows, ...rows2};
}

// All PATCH DB Requests
export async function UpdateList({ params }) {

    // Ensure that the required fields are provided
    if (params.listName == null) {
        return {error: "List Name is required"};
    }

     // Build the update query dynamically, depending on which fields are provided
     const fieldsToUpdate = {};

        if (params.listName) fieldsToUpdate.name = params.listName;
        if (params.description) fieldsToUpdate.description = params.description;
        // if (params.color) fieldsToUpdate.color = params.color;
        // if (params.emoji) fieldsToUpdate.emoji = params.emoji;

    // Construct the SQL query dynamically
    const { rows } = await sql`
        UPDATE lists
        SET ${sql(fieldsToUpdate)}  -- dynamically update the fields
        WHERE id=${params.listId}
        RETURNING *
    `;

    // If no fields are provided to update, return an error
    if (Object.keys(fieldsToUpdate).length === 0) {
        return { error: "Nothing to update" };
    }

    // Return the updated rows    
    return rows;
}

export async function UpdateListItem({ params }) { 
    if (params.itemId == null) {
        return {error: "Item Id is required"};
    }

    const fieldsToUpdate = {};

        if (params.itemName) fieldsToUpdate.name = params.itemName;
        if (params.description) fieldsToUpdate.description = params.description;
        if (params.isComplete) fieldsToUpdate.is_completed = params.isCompleted;
        if (params.orderIndex) fieldsToUpdate.due_date = params.orderIndex;
        // if (params.dueDate) fieldsToUpdate.due_date = params.dueDate;
        // if (params.priority) fieldsToUpdate.priority = params.priority;
    // Construct the SQL query dynamically
    const { rows } = await sql`
        UPDATE items
        SET ${sql(fieldsToUpdate)}  -- dynamically update the fields
        WHERE id=${params.listId}
        RETURNING *
    `;

    // If no fields are provided to update, return an error
    if (Object.keys(fieldsToUpdate).length === 0) {
        return { error: "Nothing to update" };
    }

    // Return the updated rows    
    return rows;
}

// All DELETE DB Requests
export async function DeleteList({ params }) {
    const { rows } = await sql`DELETE FROM lists WHERE id=${params.listId} RETURNING *`;
    return rows;
}

export async function DeleteListItem({ params }) {
    const { rows } = await sql`DELETE FROM items WHERE id=${params.itemId} RETURNING *`;
    return rows;
}

