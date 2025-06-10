const { MongoClient } = require("mongodb");

const url = "";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("userData");

  //insert
  const data = {
    firstName: "MS",
    lastName: "Dhoni",
    city: "Ranchi",
    cell: 1234567890,
  };

  const inserResult = await collection.insertMany([data]);
  console.log("Inserted => ", inserResult);

  //update
  const updateResult = await collection.updateOne(
    { firstName: "MS" }, // filter
    { $set: { city: "Mumbai" } } // update
  );
  console.log("Updated =>", updateResult);

  //delete
  const deleteResult = await collection.deleteOne({ firstName: "MS" });
  console.log("Deleted =>", deleteResult);

  //read
  const findResult = await collection.find({}).toArray();
  console.log("Found", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
