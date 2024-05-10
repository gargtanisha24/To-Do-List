// Get hold of the new task entered by the user
const item = document.getElementById("my-item");
const listContainer = document.getElementById("list-container"); // Corrected id

// ADD: Create a function which adds the task.
function addTask() {
    if (item.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = item.value;

         // Create edit button and attach it to the list item
         const editButton = document.createElement("button");
         editButton.innerHTML = "Edit";
         editButton.onclick = function() {
             const newText = prompt("Edit the task:");
             if (newText !== null) {
                 li.textContent = newText.trim(); // Update the task text
                 li.appendChild(editButton); // Attach edit button to list item

                 li.appendChild(deleteButton); // Attach delete button to list item
 
             }
         };
         
        
        // Create delete button and attach it to the list item
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() {
            li.remove(); // Remove the list item when delete button is clicked
        };

        li.appendChild(editButton); // Attach edit button to list item

        li.appendChild(deleteButton); // Attach delete button to list item
        
        listContainer.appendChild(li);
    }
    item.value = ''; // Clears the input field.
}
