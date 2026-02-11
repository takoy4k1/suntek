/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
   */
 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
     //1. Create a shallow copy of user*/
    const copiedUser={...user}

    //2. Change:
         // i. name in the copied object
    copiedUser.name="Matt"
         
        //ii. preferences.theme in the copied object
    copiedUser.preferences.theme="light"
          //iii. Log both original and copied objects
    console.log("Original User:",user)
    console.log("Copied User:",copiedUser)
         //iv. Observe what changes and what doesn’t











/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };*/

                  const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

//🎯 Task:
     //1. Create a deep copy of order using structuredClone
    const copiedOrder= structuredClone(order);
      //2. Modify in copied object:
           // i. customer.address.city
    copiedOrder.customer.address.city="Bangalore"
           // ii. items[0].price
    copiedOrder.items[0].price=80000
            // iii. Verify original object remains unchanged
    console.log("Original Order:",order)
    console.log("Copied Order:",copiedOrder)